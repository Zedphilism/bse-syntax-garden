---
title: "DNS Translates Human-Readable Hostnames to IP Addresses"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# DNS Translates Human-Readable Hostnames to IP Addresses

DNS (Domain Name System) is a distributed, hierarchical application-layer service that maps human-readable hostnames (e.g., `www.google.com`) to their numeric IP addresses, making the Internet usable without memorising addresses.

## Explanation

IP routing requires numeric IP addresses, but humans use names. DNS is the Internet's "phone book" — it translates names to numbers. DNS is a globally distributed database organised as a three-level hierarchy: **root name servers** (13 clusters worldwide), **Top-Level Domain (TLD) servers** (`.com`, `.org`, `.my`, etc.), and **authoritative name servers** (hold the actual records for specific domains).

DNS resolution uses iterative or recursive queries. In the most common **iterative** approach, a local DNS resolver (provided by your ISP or set manually to 8.8.8.8) queries each level in turn: root → TLD → authoritative, then caches and returns the result.

DNS stores information in **Resource Records (RRs)**: A records (hostname → IPv4), AAAA records (hostname → IPv6), MX records (mail server for a domain), CNAME records (alias → canonical name), NS records (authoritative server for a zone).

DNS uses **UDP port 53** for most queries (fast, one-packet round trip) and falls back to TCP for large responses or zone transfers.

## Key Points

- DNS: distributed hierarchical database; translates hostnames → IP addresses
- Hierarchy: root servers → TLD servers → authoritative servers
- Local DNS resolver: caches results, queries on behalf of the host
- Resource records: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), NS (name server)
- Uses UDP port 53 (small queries); TCP port 53 (large responses / zone transfer)

## Example

Browser visits `www.amazon.com`. Local DNS resolver checks cache — miss. Queries root: "where is `.com`?" → TLD server address. Queries `.com` TLD: "where is `amazon.com`?" → authoritative server address. Queries authoritative: "what is `www.amazon.com`?" → returns A record `205.251.242.103`. Resolver caches it and returns it to the browser.

## See Also

- [[dns-hierarchy-and-resolution|DNS Translates Hostnames to IP Addresses via a Distributed Hierarchy of Name Servers]]
- [[dns-resource-records|DNS Resource Records Map Names to Addresses, Mail Servers, and Canonical Hostnames]]
- [[udp-connectionless-transport|UDP Provides Bare-Bones Transport with No Delivery Guarantees]]
