---
title: "MTU Is the Maximum Size of a Datagram That a Link Can Carry"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# MTU Is the Maximum Size of a Datagram That a Link Can Carry

MTU (Maximum Transmission Unit) is the largest IP datagram (header + payload) that a particular network link can carry in a single frame — Ethernet's MTU is 1500 bytes; if a datagram exceeds the MTU of a link, it must be fragmented (IPv4) or the source must reduce its size (IPv6).

## Explanation

Different link technologies have different maximum frame sizes, and therefore different MTUs. Ethernet (the dominant LAN technology) has an MTU of 1500 bytes. This is why TCP's Maximum Segment Size (MSS) is typically set to 1460 bytes: 1500 − 20 (IP header) − 20 (TCP header) = 1460 bytes of data per segment.

When a router needs to forward an IPv4 datagram larger than the outgoing link's MTU, it **fragments** the datagram into smaller pieces, each with its own IP header. The destination host reassembles the fragments. Fragmentation is expensive (in CPU and delay) and should be avoided in practice.

**Path MTU Discovery (PMTUD)** is the preferred approach: the sender probes the path with the "Don't Fragment" (DF) bit set. If a router cannot forward the datagram without fragmenting it, it drops the datagram and sends an ICMP "Fragmentation Needed" (Type 3, Code 4) message back to the source with the MTU of the bottleneck link. The source reduces its datagram size and retries. IPv6 mandates PMTUD (no router fragmentation at all).

## Key Points

- MTU: max datagram size (bytes) a link can carry; Ethernet MTU = 1500 bytes
- IPv4: oversized datagrams fragmented by routers; reassembled at destination
- TCP MSS = MTU − 40 bytes (IP + TCP headers) = 1460 bytes on Ethernet
- DF bit (Don't Fragment): forces PMTUD; router drops + sends ICMP if too large
- IPv6: no router fragmentation; source must use PMTUD

## Example

A VPN tunnel adds a 50-byte overhead to each packet. The underlying Ethernet MTU is 1500 bytes, but the effective MTU through the tunnel is 1450 bytes. PMTUD discovers this, and the host reduces its MSS to 1410 bytes, preventing fragmentation inside the tunnel.

## See Also

- [[ip-fragmentation-and-reassembly|IP Fragmentation Splits Large Datagrams to Fit Link MTU]]
- [[ip-datagram-format|An IP Datagram Has a 20-Byte Header Carrying Addressing and Control Fields]]
- [[mss|MSS Is the Maximum Bytes of Data TCP Puts in a Single Segment]]
