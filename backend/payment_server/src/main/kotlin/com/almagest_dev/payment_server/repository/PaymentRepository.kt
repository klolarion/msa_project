package com.almagest_dev.payment_server.repository

import com.almagest_dev.payment_server.entity.Payment
import org.springframework.data.jpa.repository.JpaRepository

interface PaymentRepository : JpaRepository<Payment, Long> {
    fun findByUserId(userId: String): List<Payment>
}