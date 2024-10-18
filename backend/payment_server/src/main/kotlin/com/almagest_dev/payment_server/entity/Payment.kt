package com.almagest_dev.payment_server.entity

import jakarta.persistence.*
import java.math.BigDecimal
import java.time.LocalDateTime

enum class PaymentStatus {
    PENDING, COMPLETED, FAILED
}

@Entity
@Table(name = "payments")
data class Payment(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long = 0,

        @Column(nullable = false)
        val userId: String,

        @Column(nullable = false, precision = 20, scale = 2)
        val amount: BigDecimal,

        @Column(nullable = false)
        val currency: String,

        @Column(nullable = false)
        val paymentMethod: String,

        @Enumerated(EnumType.STRING)
        var status: PaymentStatus = PaymentStatus.PENDING,

        val createdAt: LocalDateTime = LocalDateTime.now()
)
