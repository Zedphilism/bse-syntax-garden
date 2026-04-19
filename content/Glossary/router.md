---
title: "A Router Is a Network-Layer Device That Forwards Packets Between Networks"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# A Router Is a Network-Layer Device That Forwards Packets Between Networks

A router is a network device that operates at the IP (network) layer, receives IP datagrams on one interface, looks up the destination address in its forwarding table, and transmits the datagram out the appropriate interface toward the destination — connecting different networks (subnets or ASes) together.

## Explanation

Routers are the fundamental building blocks of the Internet's core. Unlike a switch (which operates at the link layer and forwards frames within a single LAN using MAC addresses), a router operates at the network layer using IP addresses. A router can have many physical interfaces, each connected to a different network, and forwards packets between them.

The forwarding process: when a datagram arrives at a router's input port, the router examines the destination IP address, performs a longest-prefix-match lookup in the forwarding table (FIB), and dispatches the datagram through the switching fabric to the correct output port. If the TTL hits 0, or if no matching route exists, the datagram is dropped.

Routers also run **routing protocols** (OSPF, BGP, RIP) in the control plane to exchange topology information with neighboring routers and build the forwarding tables that the data plane uses. This is the "brain" of the router; the forwarding hardware is the "muscle."

**Home routers** are simplified devices that combine a router (IP forwarding), a NAT device (translating private addresses to a public IP), a DHCP server (assigning private IPs to home devices), and a Wi-Fi access point — all in one box.

## Key Points

- Router: network-layer device; forwards packets using IP addresses + forwarding table
- Operates at Layer 3 (vs. switches at Layer 2, hubs at Layer 1)
- Each interface connects to a different network; router interconnects them
- Runs routing protocols (control plane) + performs packet forwarding (data plane)
- Decrements TTL and recomputes IP checksum on every forwarded packet
- Home router: combines routing, NAT, DHCP, and Wi-Fi

## Example

Your home router has two interfaces: one connects to your ISP (public IP 203.0.113.5) and one to your home LAN (192.168.1.1/24). When your laptop (192.168.1.10) sends a request to Google (8.8.8.8), the router sees the destination is not on the 192.168.1.0/24 subnet, applies NAT, and forwards the datagram out the WAN interface toward Google.

## See Also

- [[network-layer-data-vs-control-plane|The Network Layer Has Two Planes — Data Plane Forwards, Control Plane Routes]]
- [[router-architecture-overview|A Router Has Input Ports, a Switching Fabric, and Output Ports]]
- [[forwarding-table|A Forwarding Table Maps Destination Prefixes to Output Ports in a Router]]
