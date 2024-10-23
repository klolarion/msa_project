package com.almagest_dev.auth_server.controller;

import com.almagest_dev.auth_server.entity.ApiKey;
import com.almagest_dev.auth_server.service.ApiKeyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/keys")
public class ApiKeyController {
    private final ApiKeyService apiKeyService;

    public ApiKeyController(ApiKeyService apiKeyService) {
        this.apiKeyService = apiKeyService;
    }

    @PostMapping("/generate/{userId}")
    public ResponseEntity<String> generateApiKey(@PathVariable Long userId) {
        String apiKey = apiKeyService.generateAndSaveApiKey(userId);
        return ResponseEntity.ok(apiKey);
    }

    @PostMapping("/regenerate/{userId}")
    public ResponseEntity<String> regenerateApiKey(@PathVariable Long userId) {
        String newApiKey = apiKeyService.regenerateApiKey(userId);
        return ResponseEntity.ok(newApiKey);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<ApiKey> getApiKeyByUserId(@PathVariable Long userId) {
        return apiKeyService.getApiKeyByUserId(userId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
