
**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

EmailJS notes:
`VITE_EMAILJS_TEMPLATE_ID` sends the inbound contact request to your team.
`VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID` is optional and sends a confirmation email back to the sender.
Recommended auto-reply template params:
`to_name`, `to_email`, `subject`, `acknowledgement_title`, `acknowledgement_body`, `submitted_message`, `turnaround_time`
