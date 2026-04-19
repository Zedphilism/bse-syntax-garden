---
title: "Connectionless"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# Connectionless

A connectionless protocol sends each packet (datagram) independently with no prior setup, no maintained state between packets, and no teardown — the network or transport layer simply routes each unit based on the address it carries, without knowledge of any "conversation."

## Explanation

In a connectionless protocol, there is no handshake before sending and no notification when done. Each packet is self-contained: it carries all the addressing information needed for delivery and is routed independently. The sender does not confirm the receiver is ready; the receiver does not confirm receipt (unless the application adds this).

**At the transport layer:** UDP is the canonical connectionless transport protocol. An application sends a UDP datagram by calling `sendto()` — no connection is established. The OS packages the data into a UDP segment and hands it to IP. Whether the datagram arrives is unknown.

**At the network layer:** IP itself is connectionless. Each IP datagram carries source and destination addresses and is forwarded independently. Different datagrams from the same TCP connection may travel different paths through the network.

**Contrast with connection-oriented:** TCP establishes shared state (sequence numbers, window sizes, buffers) with a three-way handshake before data flows. This state is what enables reliability and ordering — but it costs 1 RTT to set up and requires resources on both sides.

**When connectionless is preferred:** when the overhead of connection setup is not worth it (DNS — one round trip), when loss is tolerable (VoIP — a late retransmit is useless), when broadcast/multicast is needed (connection-oriented protocols are point-to-point), or when the application implements its own application-layer reliability.

## Key Points

- Connectionless: no handshake, no state, no teardown — each packet independent
- UDP: connectionless at transport layer; IP: connectionless at network layer
- Advantages: low overhead, fast start, supports broadcast/multicast
- Disadvantages: no delivery guarantee, no ordering, no congestion control
- TCP is the connection-oriented counterpart

## Example

A DNS resolver sends a UDP query to 8.8.8.8:53 for `example.com`. No connection is established. The OS creates a UDP datagram, IP routes it. Google's DNS server receives the query and sends back a UDP response — also without any connection. Total overhead: 0 extra packets for setup. Compare with TCP: 3 extra packets (SYN, SYN-ACK, ACK) before the query could even be sent.

## See Also

- [[udp-connectionless-transport|UDP: Connectionless Transport]]
- [[tcp-connection-oriented-transport|TCP: Connection-Oriented Transport]]
- [[tcp|TCP]]
- [[udp|UDP]]
