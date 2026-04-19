---
title: "UDP Is a Connectionless Transport Protocol That Trades Reliability for Speed"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# UDP Is a Connectionless Transport Protocol That Trades Reliability for Speed

UDP (User Datagram Protocol) is a transport-layer protocol that provides minimal service on top of IP — it adds only port-based multiplexing and an optional checksum, with no connection setup, reliability, ordering, or congestion control.

## Explanation

UDP is the "lightweight" alternative to TCP. Its 8-byte header (source port, destination port, length, checksum) is the smallest possible transport header. There is no handshake, no ACK, no retransmission, and no rate limiting. Data is simply sent and may or may not arrive.

This makes UDP ideal for applications where: (a) speed matters more than reliability (VoIP, video streaming, online gaming); (b) the application implements its own reliability (DNS, QUIC); or (c) a single request–response fits in one datagram so TCP's handshake overhead isn't worth it (DNS queries).

UDP's IP protocol number is 17.

**When to use UDP over TCP:**
- Real-time media (VoIP, video conferencing): stale retransmitted packets are useless
- DNS: query-response fits in one packet; UDP is simpler and faster
- SNMP: network management; loss of one poll is acceptable
- Streaming: loss of a few frames is preferable to buffering caused by TCP's congestion control

## Key Points

- UDP header: 8 bytes (src port, dst port, length, checksum)
- Connectionless: no handshake, no state maintained
- Unreliable: no ACKs, no retransmission, no ordering
- No congestion control: can send at any rate
- IP protocol number = 17
- Use cases: DNS, VoIP, video streaming, gaming, SNMP

## Example

A VoIP call sends audio as UDP packets 20 ms apart. If one packet is lost, the application plays silence or interpolates — retransmitting an old audio packet 100 ms late is worse than the loss. UDP is the right choice here; TCP's retransmission would disrupt real-time playback.

## See Also

- [[tcp|TCP Is the Internet's Reliable, Connection-Oriented Transport Protocol]]
- [[udp-connectionless-transport|UDP Provides Bare-Bones Transport with No Delivery Guarantees]]
- [[port-number|A Port Number Identifies a Specific Process or Service on a Host]]
