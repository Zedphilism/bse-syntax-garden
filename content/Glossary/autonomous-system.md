---
title: "An Autonomous System Is a Network Under Single Administrative Control"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# An Autonomous System Is a Network Under Single Administrative Control

An Autonomous System (AS) is a collection of IP prefixes and routers under the control of a single administrative entity (e.g., an ISP, university, or enterprise), identified by a globally unique AS Number (ASN), and routing internally with one protocol (intra-AS) and externally with BGP (inter-AS).

## Explanation

The Internet is not a single network managed centrally — it is thousands of independently operated networks (ASes) that agree to exchange routing information. Each AS has an **AS Number (ASN)**: originally 16-bit (1–65535), now 32-bit to accommodate growth. ASNs are assigned by IANA and regional registries (ARIN, APNIC, etc.).

Within an AS, routers use an **Interior Gateway Protocol (IGP)** — typically OSPF (link-state) or RIP (distance-vector) — to compute paths and build forwarding tables. The AS controls its own routing policy internally.

Between ASes, **BGP (Border Gateway Protocol)** is the single inter-AS protocol used universally on the Internet. eBGP sessions (external BGP) run between border routers of neighbouring ASes. Each AS announces to its BGP peers which IP prefixes are reachable through it.

Splitting the Internet into ASes enables **scalable routing**: each AS only needs to know about the prefixes reachable through its BGP neighbors, not about every router inside every other AS. OSPF topology flooding stays within the AS; BGP aggregates entire ASes into single routing entries.

## Key Points

- AS: network under single administrative control; identified by ASN (16 or 32 bit)
- Intra-AS routing: IGP (OSPF, RIP) — local, fast convergence, metric-based
- Inter-AS routing: BGP — policy-based, slow convergence, connects all ASes
- ASN assignment: IANA and regional registries (ARIN, APNIC, RIPE, etc.)
- Enables routing scalability: BGP aggregates entire AS address blocks

## Example

Telekom Malaysia is one AS (e.g., AS4788). Maxis is another AS. Google is AS15169. When a Malaysian user visits Google, traffic crosses at least 2 BGP connections: user → Telekom Malaysia (intra-AS routing via OSPF inside TM's network) → Google (eBGP between TM and Google's border routers).

## See Also

- [[bgp-inter-as-routing|BGP Is the Inter-AS Routing Protocol That Connects the Internet's Autonomous Systems]]
- [[ospf-intra-as-routing|OSPF Is a Link-State Intra-AS Routing Protocol with Hierarchical Areas]]
- [[internet-isp-hierarchy|The Internet Has a Hierarchical ISP Structure with Tier-1 ISPs at the Core]]
