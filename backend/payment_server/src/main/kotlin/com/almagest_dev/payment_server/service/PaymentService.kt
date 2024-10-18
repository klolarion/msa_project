package com.almagest_dev.payment_server.service

import com.almagest_dev.payment_server.entity.Payment
import com.almagest_dev.payment_server.entity.PaymentStatus

import com.almagest_dev.payment_server.repository.PaymentRepository
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Service
import java.math.BigDecimal
@Service
class PaymentService(private val paymentRepository: PaymentRepository) {

    fun createPayment(
        userId: String,
        amount: BigDecimal,
        currency: String,
        paymentMethod: String
    ): Payment {
        // 결제 생성 시 기본 상태는 PENDING
        val payment = Payment(
            userId = userId,
            amount = amount,
            currency = currency,
            paymentMethod = paymentMethod,
            status = PaymentStatus.PENDING
        )
        val savedPayment = paymentRepository.save(payment)

        // 비동기적으로 결제 프로세스를 시뮬레이션
        processPayment(savedPayment)

        return savedPayment
    }

    private fun processPayment(payment: Payment) {
        // 예: 2초 후 결제 성공 또는 실패를 시뮬레이션
        Thread.sleep(2000)

        payment.status = if (payment.amount < BigDecimal("500.00")) {
            PaymentStatus.COMPLETED  // 500 이하 결제는 성공
        } else {
            PaymentStatus.FAILED  // 500 이상 결제는 실패
        }

        paymentRepository.save(payment)
    }

    suspend fun cancelPayment(paymentId: Long): Payment = withContext(Dispatchers.IO) {
        val payment = paymentRepository.findById(paymentId)
            .orElseThrow { IllegalArgumentException("Payment not found") }

        payment.status = PaymentStatus.CANCELED
        paymentRepository.save(payment)
    }


    fun getPaymentsByUserId(userId: String): List<Payment> {
        return paymentRepository.findByUserId(userId)
    }
}
