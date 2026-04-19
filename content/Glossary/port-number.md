---
title: "A Port Number Identifies a Specific Process or Service on a Host"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# A Port Number Identifies a Specific Process or Service on a Host

A port number is a 16-bit integer (0–65535) in the TCP or UDP header that identifies the application process on a host — the destination port routes an incoming segment to the correct process, while the source port allows the receiver to reply.

## Explanation

IP addresses identify hosts; port numbers identify processes within a host. Together they form a **socket address** (IP:port), which uniquely identifies one endpoint of a network connection anywhere on the Internet.

Port numbers are divided into three ranges:
- **Well-known ports (0–1023):** reserved for standard services — HTTP=80, HTTPS=443, FTP=21, SSH=22, DNS=53, SMTP=25, POP3=110, IMAP=143. These require administrator privileges to bind on Unix/Linux.
- **Registered ports (1024–49151):** assigned to specific applications by IANA (e.g., MySQL=3306, PostgreSQL=5432).
- **Dynamic/Ephemeral ports (49152–65535):** assigned automatically by the OS to client sockets when they initiate a connection.

When a client connects to a server, the client's OS assigns an ephemeral source port (e.g., 54231) and the server's well-known port is the destination (e.g., 443). The server responds to the client's (IP:ephemeral port). TCP uses the full 4-tuple (src IP, src port, dst IP, dst port) to uniquely identify each connection.

## Key Points

- 16-bit field in TCP/UDP header; range 0–65535
- Well-known ports: 0–1023 (standardized services)
- Ephemeral ports: 49152–65535 (auto-assigned to clients by OS)
- Common assignments: HTTP=80, HTTPS=443, DNS=53, SMTP=25, SSH=22
- Port + IP = socket address; uniquely identifies a connection endpoint

## Example

A browser on port 54231 connects to `google.com` on port 443. The TCP 4-tuple is (client-IP:54231, google-IP:443). Google's server can simultaneously handle thousands of such connections — each distinguished by the client's unique ephemeral port.

## See Also

- [[socket|A Socket Is the Interface Between an Application and the Transport Layer]]
- [[multiplexing-and-demultiplexing|Multiplexing Uses Port Numbers to Direct Segments to the Right Process]]
- [[tcp|TCP Is the Internet's Reliable, Connection-Oriented Transport Protocol]]
