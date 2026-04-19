---
title: "A Subnet Is a Block of IP Addresses Sharing the Same Network Prefix"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# A Subnet Is a Block of IP Addresses Sharing the Same Network Prefix

A subnet (subnetwork) is a logical subdivision of an IP network in which all interfaces share the same high-order network prefix bits — devices on the same subnet can communicate directly, without needing a router.

## Explanation

IP addresses are divided into a **network prefix** (identifying the subnet) and a **host part** (identifying the individual interface within the subnet). All devices on the same subnet share the same network prefix. A router is required to forward traffic between subnets.

The **subnet mask** specifies which bits are the network prefix: a /24 mask (255.255.255.0) means the first 24 bits are the network, and the last 8 bits identify hosts within the subnet. This gives 2⁸ − 2 = 254 usable host addresses (the all-zeros and all-ones host parts are reserved for the network address and broadcast address).

CIDR notation combines address and prefix length: `192.168.10.0/24` denotes the subnet. The **network address** (`192.168.10.0`) identifies the subnet itself; the **broadcast address** (`192.168.10.255`) reaches all hosts on the subnet; usable host addresses are `192.168.10.1` – `192.168.10.254`.

To determine whether a destination is on the same subnet, hosts perform a bitwise AND of the destination IP and their subnet mask. If the result equals their own network address, the destination is local; otherwise, the packet is sent to the default gateway.

## Key Points

- Subnet: group of interfaces sharing the same network prefix
- Same subnet → communicate directly; different subnet → need a router
- Subnet mask: defines which bits are the prefix (e.g., /24 = 255.255.255.0)
- Network address: all-zeros host part; broadcast: all-ones host part
- Usable hosts per /x subnet: 2^(32-x) − 2

## Example

Network `10.0.1.0/24`: network address = `10.0.1.0`, broadcast = `10.0.1.255`, usable = `10.0.1.1` – `10.0.1.254` (254 hosts). A host at `10.0.1.50` wants to reach `10.0.1.80`: same /24 → send directly via ARP. Wants to reach `10.0.2.10`: different /24 → send to default gateway (router).

## See Also

- [[ip-address|An IP Address Is a 32-Bit (IPv4) or 128-Bit (IPv6) Number Identifying a Network Interface]]
- [[ipv4-addressing-and-subnets|IPv4 Addresses Identify Interfaces and Are Grouped into Subnets]]
- [[cidr|CIDR Uses Variable-Length Prefixes to Allocate IP Addresses Efficiently]]
