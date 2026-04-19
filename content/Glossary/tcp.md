---
title: "TCP Is the Internet's Reliable, Connection-Oriented Transport Protocol"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# TCP Is the Internet's Reliable, Connection-Oriented Transport Protocol

TCP (Transmission Control Protocol) is a transport-layer protocol that provides reliable, ordered, byte-stream delivery between two processes, using a three-way handshake for connection setup, sequence numbers and acknowledgements for reliability, and flow and congestion control to manage sending rate.

## Explanation

TCP is one of the two main Internet transport protocols (the other being UDP). It sits between the application layer (HTTP, FTP, SMTP, etc.) and the network layer (IP), providing the reliable channel that IP does not.

**Key TCP properties:**
- **Connection-oriented:** a three-way handshake (SYN → SYN-ACK → ACK) establishes shared state before data is exchanged.
- **Reliable:** every byte sent is acknowledged; lost segments are retransmitted.
- **Ordered:** TCP delivers bytes to the application in the order they were sent, even if packets arrived out of order.
- **Byte stream:** TCP treats data as a continuous stream of bytes, not as discrete messages.
- **Flow control:** the receiver advertises its buffer space (rwnd) to prevent the sender from overwhelming it.
- **Congestion control:** TCP reduces its sending rate when it detects network congestion (packet loss or 3 duplicate ACKs).

TCP's protocol number in the IP header is 6. The minimum TCP segment header is 20 bytes.

Applications that use TCP: HTTP/HTTPS (web), SMTP/IMAP/POP3 (email), FTP (file transfer), SSH (secure shell). Any application that requires reliable delivery uses TCP.

## Key Points

- TCP: reliable, ordered, connection-oriented, byte-stream transport
- Uses: 3-way handshake, sequence numbers, ACKs, retransmission, rwnd, cwnd
- IP protocol number = 6
- Minimum segment header = 20 bytes
- Applications: HTTP, HTTPS, SMTP, SSH, FTP

## Example

When you load a web page, your browser opens a TCP connection to the server on port 443 (HTTPS). TCP guarantees that every byte of the HTML, CSS, and JavaScript arrives correctly and in order. If a packet is lost mid-transfer, TCP retransmits it — the browser never sees a partially delivered page.

## See Also

- [[udp|UDP Is a Connectionless Transport Protocol That Trades Reliability for Speed]]
- [[tcp-segment-structure|TCP Segment Header Carries Sequence Numbers, ACKs, and Control Flags]]
- [[tcp-three-way-handshake|TCP Uses a Three-Way Handshake to Establish and a Four-Way Close to Terminate]]
- [[tcp-congestion-control|TCP Congestion Control Uses AIMD to Share Network Capacity Fairly]]
