---
title: "NAT Allows Multiple Private Hosts to Share a Single Public IP Address"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# NAT Allows Multiple Private Hosts to Share a Single Public IP Address

NAT (Network Address Translation) is a technique in which a router rewrites the source IP and port of outgoing packets (and the destination IP and port of incoming replies) so that an entire private network can communicate with the Internet using a single public IP address.

## Explanation

With IPv4 address exhaustion, most home and enterprise networks use **private IP addresses** (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) that are not routable on the Internet. A NAT router sits at the boundary between the private network and the Internet, holding one (or a few) public IP addresses.

When an internal host sends a packet to the Internet, the NAT router: (1) replaces the private source IP and port with the NAT's public IP and a new port; (2) records this mapping in the **NAT translation table**; (3) forwards the rewritten packet. When the reply arrives, the NAT router: (1) looks up the destination port in the translation table; (2) rewrites the destination back to the private IP and original port; (3) forwards into the private network.

From the perspective of the Internet server, all traffic appears to come from one IP address — the NAT's public IP. The NAT can support up to 65,535 simultaneous connections per public IP (one per port number).

NAT is controversial because it violates the Internet's end-to-end principle (intermediate devices should not modify packet headers) and makes it impossible for external hosts to initiate connections to internal hosts without explicit **port forwarding** configuration.

## Key Points

- NAT: rewrites src IP:port (outbound) and dst IP:port (inbound) using translation table
- Private ranges: 10/8, 172.16/12, 192.168/16 — not routable on Internet
- Enables thousands of private hosts to share one public IP
- NAT table: maps (private IP, port) ↔ (public IP, new port)
- Problem: breaks end-to-end; prevents inbound connections without port forwarding

## Example

Three devices (192.168.1.2:5000, 192.168.1.3:5000, 192.168.1.4:5000) all send packets simultaneously. NAT maps them to (203.0.113.5:10001), (203.0.113.5:10002), (203.0.113.5:10003). Servers see three different "ports" from one IP — replies are routed back to the correct private device via the NAT table.

## See Also

- [[nat-network-address-translation|NAT Maps Many Private Addresses to One Public IP Using Port Numbers]]
- [[ip-address|An IP Address Is a 32-Bit (IPv4) or 128-Bit (IPv6) Number Identifying a Network Interface]]
- [[ipv6-addressing-and-format|IPv6 Uses 128-Bit Addresses and a Simplified Fixed-Length Header]]
