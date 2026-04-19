---
title: "The OSI Model Divides Network Communication into Seven Distinct Layers"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# The OSI Model Divides Network Communication into Seven Distinct Layers

The OSI (Open Systems Interconnection) model is a conceptual framework that organises network communication functions into seven sequential layers — Physical, Data Link, Network, Transport, Session, Presentation, Application — each with a specific role and communicating only with adjacent layers.

## Explanation

The OSI model was developed by ISO in the 1980s as a reference model for designing interoperable network systems. Each layer provides services to the layer above and uses services from the layer below, communicating across the network with its **peer layer** on the other host via a protocol.

**The seven layers (bottom to top):**

1. **Physical (Layer 1):** transmits raw bits over the physical medium (electrical signals, light, radio waves). Defines connectors, voltages, frequencies.
2. **Data Link (Layer 2):** frames bits into packets for a single link; MAC addressing; error detection (CRC); examples: Ethernet, Wi-Fi (802.11).
3. **Network (Layer 3):** logical addressing (IP); routing datagrams across multiple hops; examples: IPv4, IPv6.
4. **Transport (Layer 4):** end-to-end delivery between processes; reliability, ordering, flow/congestion control; examples: TCP, UDP.
5. **Session (Layer 5):** manages sessions (setup, maintenance, teardown) between applications; rarely implemented as a distinct layer on the Internet.
6. **Presentation (Layer 6):** data format translation, encryption/decryption, compression; in practice, handled within the application on the Internet.
7. **Application (Layer 7):** provides network services directly to end-user applications; examples: HTTP, SMTP, DNS, FTP.

In practice, the Internet uses the simpler **TCP/IP 5-layer model**, collapsing OSI's Session, Presentation, and Application into a single Application layer.

## Key Points

- 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application
- Each layer adds a header (encapsulation) on the sending side; removes it on the receiving side
- Internet uses TCP/IP 5-layer model (OSI Layers 5–7 merged into Application)
- Mnemonic (top-down): All People Seem To Need Data Processing

## Example

An email is created at Layer 7 (Application: SMTP). Encrypted at Layer 6 (Presentation: TLS). Session maintained at Layer 5. TCP segment at Layer 4. IP datagram at Layer 3. Ethernet frame at Layer 2. Electrical signals at Layer 1. Receiver reverses the process.

## See Also

- [[osi-model-seven-layers|The OSI Model Organises Network Communication Functions into Seven Distinct Layers]]
- [[tcp-ip-internet-stack|The TCP/IP Internet Stack Has Five Layers from Physical Bits to Application Messages]]
- [[encapsulation|Encapsulation Wraps Data with Layer Headers as It Descends the Protocol Stack]]
