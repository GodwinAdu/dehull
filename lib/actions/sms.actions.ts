import { JutechSmsClient } from '@jutech-devs/sms-sdk';

// Initialize the client
const smsClient = new JutechSmsClient({
    apiKey: 'sk_b58c1826ac99a40abd7c235952f0d48ad8b1fa8239ec700f8ec4f0700b29984d',
    debug: true // Optional: enable debug logging
});

export async function sendBulkSms() {
    // Send bulk SMS
    const response = await smsClient.sendSms({
        text: 'Hello from Jutech SMS Bulk!',
        destinations: ['+233551556650', ],
        sender: 'Jutech Devs', // Optional
    });

    return response;
}   

