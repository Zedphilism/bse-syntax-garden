---
title: "Latency Is the Total Time a Packet Takes to Travel from Source to Destination"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# Latency Is the Total Time a Packet Takes to Travel from Source to Destination

Latency (also called end-to-end delay) is the total time for a packet to travel from the sending host to the receiving host, comprising four components: processing delay, queuing delay, transmission delay, and propagation delay.

## Explanation

At every router along a packet's path, four types of delay accumulate:

**Processing delay:** the time a router takes to examine the packet header and determine the output port (typically microseconds in modern routers).

**Queuing delay:** the time the packet waits in the output queue before it can be transmitted. This depends on traffic load — on a lightly loaded link it is near zero; on a congested link it can dominate. Queuing delay is the most variable component.

**Transmission delay:** the time to push all bits of the packet onto the link. `d_trans = L / R`, where L is the packet length in bits and R is the link bandwidth in bps. Transmission delay decreases with higher bandwidth.

**Propagation delay:** the time for a single bit to travel from the start of the link to the end. `d_prop = d / s`, where d is the physical distance and s ≈ 2×10^8 m/s (speed of light in the medium). Propagation delay cannot be reduced — it is a physical constraint.

Total nodal delay at one router: `d_nodal = d_proc + d_queue + d_trans + d_prop`. End-to-end latency sums this across all hops.

**RTT (Round-Trip Time)** is 2 × one-way latency — the time for a probe to travel to the destination and back.

## Key Points

- 4 delay components: processing, queuing, transmission, propagation
- Transmission delay = L/R (packet size ÷ link bandwidth) — reduced by more bandwidth
- Propagation delay = d/s (distance ÷ speed of light) — cannot be reduced
- Queuing delay: most variable; depends on network load
- RTT = 2 × one-way latency

## Example

A 1500-byte packet on a 1 Mbps link: transmission delay = 12,000 bits ÷ 10^6 bps = 12 ms. Propagating 1000 km: propagation delay = 10^6 m ÷ 2×10^8 m/s = 5 ms. Total one-way delay ≈ 17 ms (ignoring queuing and processing).

## See Also

- [[bandwidth|Bandwidth Is the Maximum Rate at Which Data Can Be Transmitted on a Link]]
- [[rtt|RTT Is the Round-Trip Time Between a Sender and Receiver]]
- [[four-sources-of-packet-delay|Packets Experience Four Types of Delay at Every Router Along Their Path]]
