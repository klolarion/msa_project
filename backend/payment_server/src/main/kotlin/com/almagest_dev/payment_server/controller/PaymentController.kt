package com.almagest_dev.payment_server.controller

import com.almagest_dev.payment_server.entity.Payment
import com.almagest_dev.payment_server.service.PaymentService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import kotlinx.coroutines.runBlocking
import java.math.BigDecimal


@RestController
@RequestMapping("/payments")
class PaymentController(private val paymentService: PaymentService) {

    // 결제 생성 엔드포인트
    @PostMapping
    fun createPayment(
        @RequestParam userId: String,
        @RequestParam amount: BigDecimal,
        @RequestParam currency: String,
        @RequestParam paymentMethod: String
    ): ResponseEntity<Payment> = runBlocking {
        val payment = paymentService.createPayment(userId, amount, currency, paymentMethod)
        ResponseEntity.ok(payment)
    }

    // 사용자별 결제 내역 조회 엔드포인트
    @GetMapping("/{userId}")
    fun getPaymentsByUserId(@PathVariable userId: String): ResponseEntity<List<Payment>> {
        val payments = paymentService.getPaymentsByUserId(userId)
        return ResponseEntity.ok(payments)
    }

    //결제 취소
    @PatchMapping("/{paymentId}/cancel")
    fun cancelPayment(@PathVariable paymentId: Long): ResponseEntity<Payment> = runBlocking {
        val canceledPayment = paymentService.cancelPayment(paymentId)
        ResponseEntity.ok(canceledPayment)
    }



}
