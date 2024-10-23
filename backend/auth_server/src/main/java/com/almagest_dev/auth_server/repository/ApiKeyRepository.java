package com.almagest_dev.auth_server.repository;

import com.almagest_dev.auth_server.entity.ApiKey;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ApiKeyRepository extends JpaRepository<ApiKey, Long> {
    Optional<ApiKey> findByApiKey(String apiKey);
    Optional<ApiKey> findByUserId(Long userId);
}