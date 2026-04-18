---
title: "SCSR2213 — Network Communication"
date: 2026-04-18
tags: [hub, semester-3, networking, scsr2213]
---

# SCSR2213 — Network Communication

Topics: Protocols, OSI model, TCP/IP, HTTP, DNS, email, packet switching, network architecture.

Source: *Computer Networking: A Top-Down Approach*, Kurose & Ross (7th/8th Ed.)

---

## Chapter 1 — Introduction to Computer Networks

### The Internet

- [[internet-nuts-and-bolts-view|The Internet Is a Network of Networks Built from Hosts, Links, and Switches]]
- [[internet-service-view|The Internet Provides a Programmable Infrastructure for Distributed Applications]]
- [[network-protocols-defined|Protocols Define the Format and Order of Messages Exchanged Between Network Entities]]
- [[internet-isp-hierarchy|The Internet Has a Hierarchical ISP Structure with Tier-1 ISPs at the Core]]

### Access Networks & Physical Media

- [[access-networks-overview|Access Networks Physically Connect End Systems to the First Router on the Internet Path]]
- [[physical-media-types|Physical Media Carry Bits as Guided or Unguided Electromagnetic Signals]]

### Network Core

- [[packet-switching-store-and-forward|Packet Switching Forwards Data in Chunks Using Store-and-Forward at Each Router]]
- [[circuit-switching-fdm-tdm|Circuit Switching Reserves Dedicated Resources for a Connection Using FDM or TDM]]
- [[packet-vs-circuit-switching|Packet Switching Supports More Users Than Circuit Switching on Bursty Traffic]]

### Performance

- [[four-sources-of-packet-delay|Packets Experience Four Types of Delay at Every Router Along Their Path]]
- [[throughput-and-bottleneck-links|Throughput Is Constrained by the Slowest Link — the Bottleneck — on the End-to-End Path]]

### Protocol Layers

- [[osi-model-seven-layers|The OSI Model Organises Network Communication Functions into Seven Distinct Layers]]
- [[tcp-ip-internet-stack|The TCP/IP Internet Stack Has Five Layers from Physical Bits to Application Messages]]
- [[encapsulation-in-protocol-layers|Encapsulation Wraps Data with Layer-Specific Headers as It Descends the Protocol Stack]]

### Security

- [[network-security-threats|The Internet's Major Security Threats Are Malware, DoS, Packet Sniffing, and IP Spoofing]]

---

## Chapter 2 — Application Layer

### Application Architecture

- [[client-server-vs-p2p-architecture|Application Architectures Are Either Client-Server or Peer-to-Peer]]

### HTTP & The Web

- [[http-stateless-protocol|HTTP Is a Stateless Client-Server Protocol That Transfers Web Objects over TCP]]
- [[http-persistent-vs-non-persistent|Persistent HTTP Reuses One TCP Connection While Non-Persistent HTTP Opens a New One Per Object]]
- [[http-cookies-for-state|HTTP Cookies Allow Servers to Maintain User State Across Stateless HTTP Requests]]
- [[web-caching-proxy-servers|Web Caches Reduce Response Time and Access Link Load by Serving Locally Stored Copies]]

### Email

- [[smtp-email-protocol|SMTP Pushes Email Between Mail Servers over TCP While POP3 and IMAP Handle Retrieval]]

### DNS

- [[dns-hierarchy-and-resolution|DNS Translates Hostnames to IP Addresses via a Distributed Hierarchy of Name Servers]]
- [[dns-resource-records|DNS Resource Records Map Names to Addresses, Mail Servers, and Canonical Hostnames]]

### P2P & Video Streaming

- [[bittorrent-p2p-file-sharing|BitTorrent Uses Rarest-First Chunk Requests and Tit-for-Tat Upload to Share Files Efficiently]]
- [[dash-adaptive-video-streaming|DASH Adapts Video Quality Dynamically Based on Client Bandwidth and Buffer State]]

---

## See Also

- [[Glossary/_Index|Glossary]]
- [[semester-03/SECR1013-digital-logic/_Index|Digital Logic]] — hardware layer underpins network hardware
- [[semester-03/SECI1113-computational-mathematic/_Index|Computational Mathematics]] — binary/hex used in addressing
