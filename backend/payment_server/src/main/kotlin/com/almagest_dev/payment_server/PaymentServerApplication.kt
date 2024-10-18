package com.almagest_dev.payment_server

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class PaymentServerApplication

fun main(args: Array<String>) {
	runApplication<PaymentServerApplication>(*args)
}
