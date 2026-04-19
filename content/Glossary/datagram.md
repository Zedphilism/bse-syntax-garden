---
title: "A Datagram Is the Network-Layer Packet Forwarded by IP Routers"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# A Datagram Is the Network-Layer Packet Forwarded by IP Routers

A datagram is the network-layer unit of data: a self-contained, independently routed packet consisting of an IP header (with source and destination addresses) and a payload carrying a transport-layer segment.

## Explanation

The Internet Protocol (IP) operates at the network layer and deals in datagrams. Unlike a circuit-switched connection, each IP datagram is routed independently — it carries its full destination address and may traverse a different path through the network than other datagrams from the same conversation.

An IPv4 datagram has a minimum 20-byte header. The router reads the destination IP address, performs a longest-prefix-match lookup in its forwarding table, and sends the datagram out the appropriate interface — all without maintaining any state about the connection. This stateless forwarding makes IP scalable but inherently unreliable (datagrams may be lost, reordered, or duplicated).

The word "datagram" is also used for UDP's transport-layer unit, which can be confusing. In strict usage, "datagram" alone refers to the IP-layer packet; "UDP datagram" refers to a UDP transport unit.

## Key Points

- Datagram: IP's unit of data; carries src/dst IP addresses in header
- Self-contained and independently routed — no pre-established path
- Unreliable: IP makes no delivery guarantee (best-effort)
- IPv4 datagram: 20-byte min header + payload

## Example

A TCP segment is handed from the transport layer to the network layer. IP wraps it in a datagram by prepending a 20-byte header with src IP, dst IP, TTL, protocol=6 (TCP), and checksum. The datagram is then forwarded hop-by-hop to the destination, which strips the IP header and passes the TCP segment up.

## See Also

- [[ip-datagram-format|An IP Datagram Has a 20-Byte Header Carrying Addressing and Control Fields]]
- [[packet|A Packet Is a Fixed-Size Chunk of Data Routed Independently Through the Network]]
- [[segment|A Segment Is the Transport-Layer Unit Exchanged Between TCP Endpoints]]
