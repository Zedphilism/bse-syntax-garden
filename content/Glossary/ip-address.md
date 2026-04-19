---
title: "An IP Address Is a 32-Bit (IPv4) or 128-Bit (IPv6) Number Identifying a Network Interface"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# An IP Address Is a 32-Bit (IPv4) or 128-Bit (IPv6) Number Identifying a Network Interface

An IP address is a numerical label assigned to each network interface on a device, used by the IP protocol to identify the source and destination of datagrams and to route them across interconnected networks.

## Explanation

IP addresses are not device identifiers — they identify **interfaces** (the connection between a device and a network link). A router with 4 links has 4 IP addresses; a laptop with Wi-Fi and Ethernet has 2.

**IPv4** uses 32-bit addresses written in dotted-decimal notation: four decimal octets separated by dots (e.g., `192.168.1.42`). The 32-bit space gives 2³² ≈ 4.3 billion addresses — nearly exhausted, leading to NAT and IPv6.

**IPv6** uses 128-bit addresses written in colon-separated hexadecimal groups (e.g., `2001:db8::1`). The 128-bit space gives 3.4×10³⁸ addresses.

Addresses are hierarchically structured: the high-order bits (the **network prefix**) identify the subnet; the low-order bits (the **host part**) identify the specific interface. CIDR notation `/x` specifies the prefix length (e.g., `10.0.0.0/8` means the first 8 bits are the network prefix).

**Special addresses:** `127.0.0.1` = loopback; `255.255.255.255` = broadcast; `0.0.0.0` = unspecified/any. Private ranges (not routed on the Internet): `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`.

## Key Points

- Identifies a network interface, not a device
- IPv4: 32 bits, dotted decimal (e.g., 192.168.1.1) — 4.3B addresses
- IPv6: 128 bits, colon hex (e.g., 2001:db8::1) — 3.4×10³⁸ addresses
- CIDR /x: x bits = network prefix, 32-x (or 128-x) bits = host
- Private IPv4 ranges: 10/8, 172.16/12, 192.168/16

## Example

A laptop has two interfaces: Wi-Fi (192.168.1.10/24) and Ethernet (10.0.0.5/16). The `/24` tells routers that the first 24 bits (192.168.1) are the network — any address in `192.168.1.0/24` is on the same subnet and reachable without a router.

## See Also

- [[ipv4-addressing-and-subnets|IPv4 Addresses Identify Interfaces and Are Grouped into Subnets]]
- [[ipv6-addressing-and-format|IPv6 Uses 128-Bit Addresses and a Simplified Fixed-Length Header]]
- [[subnet|A Subnet Is a Block of IP Addresses Sharing the Same Network Prefix]]
