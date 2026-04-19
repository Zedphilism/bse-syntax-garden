---
title: "TTL Is the Hop Count Field That Prevents Packets from Looping Forever"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# TTL Is the Hop Count Field That Prevents Packets from Looping Forever

TTL (Time to Live) is an 8-bit field in the IPv4 header that is decremented by 1 at every router; when it reaches 0, the router discards the datagram and sends an ICMP "Time Exceeded" message back to the source.

## Explanation

Without TTL, a misrouted packet could loop indefinitely between routers, consuming bandwidth forever. TTL is the safeguard: each router that forwards a datagram must decrement the TTL by at least 1 (and recompute the IP header checksum, since TTL is a header field). When the TTL reaches 0, the datagram is dropped and an ICMP Type 11 ("Time Exceeded") message is sent back to the source IP.

The maximum TTL value is 255. Common defaults: Windows sets TTL=128; Linux/macOS set TTL=64. Because TTL decrements at each hop, the TTL of a received packet can give a rough estimate of how many routers it traversed: if a packet arrives with TTL=50 and the OS default is 64, it passed through approximately 14 routers.

TTL has a second important use: it is the mechanism behind **traceroute**. By sending probes with TTL=1, 2, 3, … and collecting the ICMP Type 11 responses from each router that drops the probes, traceroute maps every hop on the path from source to destination.

In IPv6, the equivalent field is called **Hop Limit** and behaves identically.

## Key Points

- TTL: 8-bit field; max 255; decremented by 1 per router hop
- TTL=0: datagram dropped; router sends ICMP Type 11 (Time Exceeded) to source
- Prevents infinite routing loops in case of misconfigured routes
- Common defaults: Linux/macOS = 64, Windows = 128
- Used by traceroute to discover path hops
- IPv6 equivalent: Hop Limit

## Example

A routing loop forms between routers R1 and R2. Without TTL, a packet would bounce between them forever. With TTL: packet starts at TTL=64. R1 forwards, TTL=63. R2 forwards, TTL=62. After 62 more hops, TTL=0 at R1 → R1 drops the packet and sends ICMP Time Exceeded to the original sender.

## See Also

- [[ip-datagram-format|An IP Datagram Has a 20-Byte Header Carrying Addressing and Control Fields]]
- [[icmp-internet-control-message-protocol|ICMP Reports Network Errors and Is Used by Ping and Traceroute]]
- [[rtt|RTT Is the Round-Trip Time Between a Sender and Receiver]]
