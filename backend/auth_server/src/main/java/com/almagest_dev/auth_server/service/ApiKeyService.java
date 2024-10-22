import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class ApiKeyService {
    private final ApiKeyRepository apiKeyRepository;

    public ApiKeyService(ApiKeyRepository apiKeyRepository) {
        this.apiKeyRepository = apiKeyRepository;
    }

    public String generateAndSaveApiKey(Long userId) {
        String apiKey = ApiKeyGenerator.generateApiKey();
        ApiKey newApiKey = new ApiKey();
        newApiKey.setUserId(userId);
        newApiKey.setApiKey(apiKey);
        newApiKey.setIssuedAt(LocalDateTime.now());
        apiKeyRepository.save(newApiKey);
        return apiKey;
    }

    public Optional<ApiKey> getApiKeyByUserId(Long userId) {
        return apiKeyRepository.findByUserId(userId);
    }

    public String regenerateApiKey(Long userId) {
        Optional<ApiKey> existingApiKey = apiKeyRepository.findByUserId(userId);
        existingApiKey.ifPresent(apiKeyRepository::delete);
        return generateAndSaveApiKey(userId);
    }
}
