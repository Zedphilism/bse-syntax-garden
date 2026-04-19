---
title: "A Forwarding Table Maps Destination Prefixes to Output Ports in a Router"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# A Forwarding Table Maps Destination Prefixes to Output Ports in a Router

A forwarding table (also called the FIB — Forwarding Information Base) is the data structure stored in a router's hardware that maps destination IP prefixes to output ports, enabling the router to make per-packet forwarding decisions at line rate using longest prefix matching.

## Explanation

The forwarding table is the data-plane instantiation of the routing table. While the routing table is computed by the control-plane routing protocol (OSPF, BGP) running on the router's CPU, the forwarding table is a hardware-optimised copy loaded into the router's **line cards** (input ports). This separation means forwarding can happen at nanosecond timescales without involving the CPU for every packet.

Each entry in the forwarding table contains a **destination prefix** (e.g., `10.0.0.0/8`) and an **output port** (and sometimes a next-hop IP address). When a packet arrives, the router performs a **longest prefix match**: find the entry whose prefix is the longest (most specific) match for the packet's destination IP address. This is done in hardware using **TCAM** (Ternary Content-Addressable Memory), which can match against all entries simultaneously in a single clock cycle.

The forwarding table is distinct from the ARP table (which maps IP to MAC) and the routing table (which includes protocol metadata and is more detailed). In SDN, the forwarding table is replaced by a **flow table** installed by a remote controller via OpenFlow.

## Key Points

- Forwarding table (FIB): hardware data structure mapping prefix → output port
- Used for per-packet forwarding in the data plane (nanoseconds)
- Lookup method: longest prefix match (TCAM in hardware)
- Populated by the control plane (OSPF/BGP routing protocols)
- SDN equivalent: flow table installed by remote controller

## Example

A router's forwarding table: `0.0.0.0/0 → port 0` (default), `10.0.0.0/8 → port 1`, `10.1.0.0/16 → port 2`. Incoming packet with dst `10.1.2.3`: matches both `/8` and `/16` — longest prefix (`/16`) wins → forward out port 2.

## See Also

- [[network-layer-data-vs-control-plane|The Network Layer Has Two Planes — Data Plane Forwards, Control Plane Routes]]
- [[router-architecture-overview|A Router Has Input Ports, a Switching Fabric, and Output Ports]]
- [[sdn-control-plane|SDN Separates the Control Plane from Data Plane Hardware into a Remote Controller]]
