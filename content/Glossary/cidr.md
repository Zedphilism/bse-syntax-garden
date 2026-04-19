---
title: "CIDR Uses Variable-Length Prefixes to Allocate IP Addresses Efficiently"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# CIDR Uses Variable-Length Prefixes to Allocate IP Addresses Efficiently

CIDR (Classless Inter-Domain Routing) is the IP address allocation scheme that replaces fixed classful boundaries with variable-length prefixes, written as `address/prefix-length`, enabling precise address allocation and route aggregation in the global routing table.

## Explanation

Before CIDR, addresses were divided into Class A (/8), B (/16), and C (/24) blocks — fixed boundaries that wasted addresses massively (a company needing 300 hosts was forced to take an entire Class B = 65,534 hosts). CIDR (1993) allows any prefix length from /0 to /32.

CIDR notation `a.b.c.d/x` means the first x bits identify the network, and the remaining 32-x bits identify hosts within that network. Any value of x is valid: /22 gives 1022 hosts, /25 gives 126, /30 gives 2 (point-to-point links).

The key benefit beyond precise allocation is **route aggregation**: an ISP holding `200.0.0.0/8` can advertise a single /8 route covering all its customers, rather than thousands of individual routes. This keeps the global BGP routing table manageable.

**Longest prefix matching** handles overlapping CIDR entries in forwarding tables: the most specific (longest prefix) matching entry wins. This allows a /8 default for a whole ISP to coexist with a specific /24 for a particular customer.

## Key Points

- CIDR: variable prefix length /x (0–32); replaces fixed Class A/B/C boundaries
- Notation: `a.b.c.d/x` — x bits = network, 32-x bits = host
- Allows precise allocation (any size block) — eliminates classful waste
- Route aggregation: one /x entry covers all addresses in the block
- Longest prefix match: most specific matching entry used in forwarding

## Example

An ISP needs to give a customer 500 addresses. Classful: must give /23 (512 addresses) or /22 (1024). With CIDR: assign exactly `203.10.5.0/23` (512 addresses, close to needed). The ISP advertises `203.10.0.0/20` to the rest of the Internet — one route covers 16 customer blocks.

## See Also

- [[subnet|A Subnet Is a Block of IP Addresses Sharing the Same Network Prefix]]
- [[subnetting-cidr-vs-classful|CIDR Replaced Classful Addressing to Eliminate Wasteful Address Allocation]]
- [[bgp-inter-as-routing|BGP Is the Inter-AS Routing Protocol That Connects the Internet's Autonomous Systems]]
