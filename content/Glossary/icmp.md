---
title: "ICMP Is the Network Layer's Error and Diagnostic Messaging Protocol"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# ICMP Is the Network Layer's Error and Diagnostic Messaging Protocol

ICMP (Internet Control Message Protocol) is a companion protocol to IP (protocol number 1) that carries error messages and operational information between routers and hosts — it is the basis of the `ping` and `traceroute` diagnostic tools.

## Explanation

When an IP datagram cannot be delivered, or when something unexpected happens in transit, ICMP provides a standardised way for routers and hosts to report the problem back to the source. ICMP messages are encapsulated directly in IP datagrams (protocol field = 1) and are therefore unreliable — ICMP messages themselves can be lost.

**Key ICMP message types:**
- **Type 0 (Echo Reply) / Type 8 (Echo Request):** `ping` uses these to test reachability and measure RTT.
- **Type 3 (Destination Unreachable):** sent when a datagram cannot reach its destination. Code 0 = network unreachable, Code 1 = host unreachable, Code 3 = port unreachable, Code 4 = fragmentation needed but DF bit set.
- **Type 11 (Time Exceeded):** sent when a router decrements TTL to 0. Used by `traceroute`.

ICMP cannot carry application data — it is purely for network diagnostics and error reporting. Many firewalls block ICMP as a security measure, which means `ping` failures don't necessarily mean a host is down.

IPv6 uses **ICMPv6** (protocol 58), which also handles neighbor discovery (replacing ARP) and multicast group management.

## Key Points

- ICMP: IP companion protocol (proto=1); carries error and info messages
- Type 8/0: Echo Request/Reply — used by ping
- Type 3: Destination Unreachable — various codes (network, host, port, frag needed)
- Type 11: Time Exceeded (TTL=0) — used by traceroute
- Not reliable; can be blocked by firewalls
- ICMPv6 (proto=58): IPv6 equivalent, also does neighbor discovery

## Example

`ping 8.8.8.8` sends ICMP Type 8 (Echo Request) to Google's DNS server. Google replies with Type 0 (Echo Reply). The RTT is printed. If a router on the path drops the TTL to 0 instead, you get an ICMP Type 11 from that router — and `ping` reports "TTL expired in transit."

## See Also

- [[icmp-internet-control-message-protocol|ICMP Reports Network Errors and Is Used by Ping and Traceroute]]
- [[ttl|TTL Is the Hop Count Field That Prevents Packets from Looping Forever]]
- [[ip-datagram-format|An IP Datagram Has a 20-Byte Header Carrying Addressing and Control Fields]]
