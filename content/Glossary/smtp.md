---
title: "SMTP Is the Protocol That Transfers Email Between Mail Servers"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# SMTP Is the Protocol That Transfers Email Between Mail Servers

SMTP (Simple Mail Transfer Protocol) is the application-layer protocol used to push email messages from a sender's mail client to their mail server, and between mail servers, over TCP port 25 (or 587 for client submission).

## Explanation

SMTP is a **push protocol** — it moves email from client to server and server to server. The receiving end uses separate **retrieval protocols**: POP3 (Post Office Protocol v3, port 110) to download-and-delete messages, or IMAP (Internet Message Access Protocol, port 143) to access messages stored on the server.

SMTP uses a simple text-based command/response exchange over a persistent TCP connection: `HELO`/`EHLO` to greet the server, `MAIL FROM:` to identify the sender, `RCPT TO:` to specify the recipient, `DATA` to begin the message body (terminated by a line with just `.`), and `QUIT` to close.

Email format is defined by RFC 2822: a header section (From:, To:, Date:, Subject:) followed by a blank line and the message body. MIME extensions add multi-part messages, attachments, and non-ASCII content.

The email system works in stages: (1) User's mail client sends message to its outgoing mail server via SMTP (port 587). (2) Sender's mail server delivers to recipient's mail server via SMTP (port 25), using DNS MX records to find the recipient's mail server. (3) Recipient's client fetches messages via POP3 or IMAP.

## Key Points

- SMTP: push protocol; TCP port 25 (server-to-server), port 587 (client-to-server)
- Retrieval protocols: POP3 (port 110, download-and-delete), IMAP (port 143, server-side)
- Text-based commands: EHLO, MAIL FROM, RCPT TO, DATA, QUIT
- Uses DNS MX records to find recipient's mail server
- MIME: extends SMTP for attachments and non-ASCII content

## Example

You send an email from `alice@gmail.com` to `bob@outlook.com`. Gmail's mail server uses DNS to look up the MX record for `outlook.com` → finds `smtp-in.l.google.com:25`. It opens an SMTP connection and delivers the message. Bob's Outlook client fetches the message via IMAP.

## See Also

- [[smtp-email-protocol|SMTP Pushes Email Between Mail Servers over TCP While POP3 and IMAP Handle Retrieval]]
- [[dns-resource-records|DNS Resource Records Map Names to Addresses, Mail Servers, and Canonical Hostnames]]
- [[tcp|TCP Is the Internet's Reliable, Connection-Oriented Transport Protocol]]
