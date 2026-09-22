class SMSService:
    @staticmethod
    def send_sms(phone_number: str, message: str):
        # SMS sender logic (Twilio / SNS)
        print(f"Sending SMS to {phone_number}: {message}")
