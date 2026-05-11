---
title: "BSE Syntax Garden"
date: 2026-04-09
tags: [hub, bse]
---

# BSE Syntax Garden

Hi, I'm Zaidi — a Bachelor of Software Engineering student learning in public.

Welcome to my digital garden.

This space is dedicated to my study notes, organized by semester and continuously updated as I learn.

Each note represents an active attempt to understand — not just memorize. Topics are broken down, revisited, and refined over time as my knowledge improves.

Think of this as a living academic system: structured, iterative, and always evolving.

Navigate by semester, and follow the progression.

---

## Upcoming Tests — SCSR2213 Network Communication

> [!danger] Test 1 — 16 May 2026 | Chapter 1 + Chapter 2 (up to Email) | [▶ Open Revision Arena](../test1-quiz.html)
>
> ### Chapter 1 — Introduction
>
> **The Internet & Protocols**
> - [[semester-03/SCSR2213-network-communication/internet-nuts-and-bolts-view|The Internet: Nuts and Bolts View]]
> - [[semester-03/SCSR2213-network-communication/internet-service-view|The Internet: Service View]]
> - [[semester-03/SCSR2213-network-communication/network-protocols-defined|What Is a Protocol?]]
> - [[semester-03/SCSR2213-network-communication/internet-isp-hierarchy|Internet ISP Hierarchy]]
>
> > Trivia: A protocol defines both the **format** and **order** of messages AND the actions taken on send/receive. Without the action part, it's just a format.
>
> **Access Networks & Physical Media**
> - [[semester-03/SCSR2213-network-communication/access-networks-overview|Access Networks]]
> - [[semester-03/SCSR2213-network-communication/physical-media-types|Physical Media Types]]
>
> > Trivia: Guided media (copper, fibre) constrains the signal to a physical path. Unguided (WiFi, radio) propagates freely — interception is trivially easy.
>
> **Network Core — Switching**
> - [[semester-03/SCSR2213-network-communication/packet-switching-store-and-forward|Packet Switching: Store and Forward]]
> - [[semester-03/SCSR2213-network-communication/circuit-switching-fdm-tdm|Circuit Switching: FDM and TDM]]
> - [[semester-03/SCSR2213-network-communication/packet-vs-circuit-switching|Packet vs Circuit Switching]]
>
> > Trivia: Store-and-forward means the **entire** packet must arrive at a router before any bit is forwarded. Transmission delay = L/R per hop. A circuit reserves bandwidth end-to-end even when silent — packet switching does not.
>
> **Performance**
> - [[semester-03/SCSR2213-network-communication/four-sources-of-packet-delay|Four Sources of Packet Delay]]
> - [[semester-03/SCSR2213-network-communication/throughput-and-bottleneck-links|Throughput and Bottleneck Links]]
>
> > Trivia: The four delays are **nodal processing → queuing → transmission → propagation**. Transmission = L/R (packet length ÷ link rate). Propagation = d/s (distance ÷ speed of light in medium). Bottleneck link = the slowest link on the path — it caps end-to-end throughput.
>
> **Protocol Layers**
> - [[semester-03/SCSR2213-network-communication/osi-model-seven-layers|OSI Model: Seven Layers]]
> - [[semester-03/SCSR2213-network-communication/tcp-ip-internet-stack|TCP/IP Internet Stack]]
> - [[semester-03/SCSR2213-network-communication/encapsulation-in-protocol-layers|Encapsulation in Protocol Layers]]
>
> > Trivia: OSI has 7 layers; TCP/IP collapses them to 5 (drops Presentation and Session). Every layer adds a **header** on the way down — the link layer also adds a **trailer**. Each layer's data unit has a different name: segment → datagram → frame.
>
> **Security**
> - [[semester-03/SCSR2213-network-communication/network-security-threats|Network Security Threats]]
>
> > Trivia: Packet sniffing is passive (read-only) — hard to detect. IP spoofing forges the source address. A DoS attack floods a target; a DDoS coordinates many compromised hosts.
>
> ---
>
> ### Chapter 2 — Application Layer (up to Email)
>
> **Application Architecture**
> - [[semester-03/SCSR2213-network-communication/client-server-vs-p2p-architecture|Client-Server vs P2P Architecture]]
>
> > Trivia: In client-server, the server has a **permanent, well-known IP**. In P2P, peers are intermittently connected — no always-on server. P2P scales better because capacity grows with each peer that joins.
>
> **HTTP & The Web**
> - [[semester-03/SCSR2213-network-communication/http-stateless-protocol|HTTP: Stateless Protocol]]
> - [[semester-03/SCSR2213-network-communication/http-persistent-vs-non-persistent|HTTP: Persistent vs Non-Persistent Connections]]
> - [[semester-03/SCSR2213-network-communication/http-cookies-for-state|HTTP Cookies]]
> - [[semester-03/SCSR2213-network-communication/web-caching-proxy-servers|Web Caching and Proxy Servers]]
>
> > Trivia: HTTP is **stateless** — the server remembers nothing between requests. Non-persistent HTTP needs **2 RTTs per object** (1 for TCP handshake + 1 for the request). Persistent HTTP amortises the handshake. Cookies inject state back in at the application layer. A proxy cache uses a conditional GET with `If-Modified-Since` — if the server returns 304 Not Modified, the cached copy is served without re-downloading.

> [!warning] Test 2 — 13 June 2026 | Chapter 2 (Email → End) + All of Chapter 3 | [▶ Open Revision Arena](../test2-quiz.html)
>
> ### Chapter 2 — Application Layer (Email to End)
>
> **Email**
> - [[semester-03/SCSR2213-network-communication/smtp-email-protocol|SMTP, POP3, and IMAP]]
>
> > Trivia: SMTP is a **push** protocol (sender pushes to receiver's mail server) over TCP port 25. HTTP pulls; SMTP pushes — don't mix them up. POP3 downloads mail and (by default) deletes it from the server. IMAP keeps mail on the server and allows folder organisation across devices.
>
> **DNS**
> - [[semester-03/SCSR2213-network-communication/dns-hierarchy-and-resolution|DNS: Hierarchy and Resolution]]
> - [[semester-03/SCSR2213-network-communication/dns-resource-records|DNS Resource Records]]
>
> > Trivia: DNS resolution order is **Local DNS → Root → TLD → Authoritative**. Iterated query: local resolver does all the asking. Recursive query: each server asks the next on your behalf. Record types — **A** = hostname→IP, **NS** = domain→nameserver, **CNAME** = alias→canonical, **MX** = mail server. DNS uses **UDP port 53** (fast, tolerates occasional loss).
>
> **P2P & Video Streaming**
> - [[semester-03/SCSR2213-network-communication/bittorrent-p2p-file-sharing|BitTorrent: P2P File Sharing]]
> - [[semester-03/SCSR2213-network-communication/dash-adaptive-video-streaming|DASH: Adaptive Video Streaming]]
>
> > Trivia: BitTorrent uses **tit-for-tat** — you upload to peers who upload the most to you. Rarest-first chunk selection prevents a single peer from becoming the bottleneck. DASH stores video at multiple quality levels; the **client** measures available bandwidth and chooses the chunk quality — the server is dumb, the client is smart.
>
> ---
>
> ### Chapter 3 — Transport Layer
>
> **Fundamentals**
> - [[semester-03/SCSR2213-network-communication/transport-layer-vs-network-layer|Transport Layer vs Network Layer]]
> - [[semester-03/SCSR2213-network-communication/multiplexing-and-demultiplexing|Multiplexing and Demultiplexing]]
>
> > Trivia: Network layer delivers between **hosts**. Transport layer delivers between **processes** (sockets). Multiplexing = gathering data from multiple sockets and attaching headers. Demultiplexing = delivering segments to the right socket using port numbers.
>
> **UDP**
> - [[semester-03/SCSR2213-network-communication/udp-connectionless-transport|UDP: Connectionless Transport]]
> - [[semester-03/SCSR2213-network-communication/checksum-process|Checksum Process]]
> - [[semester-03/SCSR2213-network-communication/checksum-exam-style|Checksum: Exam-Style Worked Example]]
>
> > Trivia: UDP has **no handshake, no guarantee of delivery, no ordering**. Its header is only 8 bytes (src port, dst port, length, checksum). Checksum: add all 16-bit words together, wrap any carry-out back to the LSB, then take the **1s complement**. Receiver adds its copy and the checksum — if the result is all 1s, no error detected.
>
> **Reliable Data Transfer**
> - [[semester-03/SCSR2213-network-communication/reliable-data-transfer-principles|Principles of Reliable Data Transfer]]
> - [[semester-03/SCSR2213-network-communication/rdt-1-0-to-3-0|rdt 1.0 → rdt 3.0]]
> - [[semester-03/SCSR2213-network-communication/stop-and-wait-protocol|Stop-and-Wait Protocol]]
> - [[semester-03/SCSR2213-network-communication/go-back-n-vs-selective-repeat|Go-Back-N vs Selective Repeat]]
>
> > Trivia: rdt 2.0 adds ACK/NAK for bit errors. Problem: what if ACK/NAK itself is corrupted? rdt 2.1 fixes this with **sequence numbers**. rdt 3.0 adds a **timer** for packet loss. Stop-and-wait is rdt 3.0 with window size 1 — sender utilisation = (L/R) / (RTT + L/R), often terrible. Go-Back-N: on error, retransmit **everything from the error onwards**. Selective Repeat: retransmit **only the lost packet** — requires receiver buffering.
>
> **TCP**
> - [[semester-03/SCSR2213-network-communication/tcp-connection-oriented-transport|TCP: Connection-Oriented Transport]]
> - [[semester-03/SCSR2213-network-communication/tcp-segment-structure|TCP Segment Structure]]
> - [[semester-03/SCSR2213-network-communication/tcp-rtt-estimation-and-timeout|TCP RTT Estimation and Timeout]]
> - [[semester-03/SCSR2213-network-communication/tcp-fast-retransmit|TCP Fast Retransmit]]
> - [[semester-03/SCSR2213-network-communication/tcp-flow-control|TCP Flow Control]]
> - [[semester-03/SCSR2213-network-communication/tcp-three-way-handshake|TCP: Three-Way Handshake and Close]]
>
> > Trivia: TCP three-way handshake: **SYN → SYN-ACK → ACK**. Sequence number tracks bytes, not segments. ACK number = next expected byte. Flow control: receiver advertises **rwnd** (receive window) in every segment header — sender must not exceed it. RTT estimation uses EWMA: EstimatedRTT = 0.875×EstimatedRTT + 0.125×SampleRTT. Timeout = EstimatedRTT + 4×DevRTT. Fast retransmit: 3 duplicate ACKs trigger immediate retransmit **without** waiting for timeout.
>
> **Congestion Control**
> - [[semester-03/SCSR2213-network-communication/congestion-control-principles|Principles of Congestion Control]]
> - [[semester-03/SCSR2213-network-communication/tcp-congestion-control|TCP Congestion Control]]
>
> > Trivia: Slow start is not slow — cwnd **doubles** every RTT until ssthresh. Then AIMD takes over: +1 MSS per RTT (Additive Increase) until loss, then halve (Multiplicative Decrease). On timeout: ssthresh = cwnd/2, cwnd = 1 MSS, restart slow start. On 3 dup ACKs (fast retransmit): ssthresh = cwnd/2, cwnd = ssthresh (TCP Reno skips slow-start restart).
>
> **Evolution**
> - [[semester-03/SCSR2213-network-communication/transport-layer-evolution|Evolution of Transport Layer Functionality]]

---

## Semesters

- [[semester-03/_Index|Semester 03]] ← current

## Cross-cutting

- [[Glossary/_Index|Glossary]] — universal definitions across all semesters
