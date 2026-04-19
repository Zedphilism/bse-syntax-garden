---
title: "Bandwidth Is the Maximum Rate at Which Data Can Be Transmitted on a Link"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# Bandwidth Is the Maximum Rate at Which Data Can Be Transmitted on a Link

Bandwidth is the capacity of a communication link measured in bits per second (bps), representing the maximum volume of data that can pass through the link per unit of time.

## Explanation

Bandwidth (also called link capacity or transmission rate) determines how fast bits can be pushed onto a physical medium. A 1 Gbps Ethernet link can transmit up to 10^9 bits every second. Higher bandwidth means more data can be sent per unit time, but it does not reduce the propagation delay — a bit still travels at roughly 2×10^8 m/s regardless of the link's bandwidth.

Bandwidth is the resource that packet-switched networks share among users. When multiple flows compete for the same link, each gets a portion of the bandwidth. A heavily loaded link leads to queuing delay and eventual packet loss.

Common units: bps (bits per second), Kbps (10^3 bps), Mbps (10^6 bps), Gbps (10^9 bps), Tbps (10^12 bps). Note: bandwidth in networking is measured in *bits* per second, not bytes — a common source of confusion.

Bandwidth should not be confused with **throughput** (the actual data delivery rate achieved, which may be less than bandwidth due to congestion, loss, and protocol overhead) or **latency** (the delay experienced by a packet, which is independent of bandwidth).

## Key Points

- Bandwidth: link capacity in bps (bits per second) — maximum possible rate
- Does not affect propagation speed — only how many bits per second
- Shared among all flows using the link
- Distinct from throughput (actual rate) and latency (delay)

## Example

A home broadband connection advertised as 100 Mbps has a bandwidth of 100 × 10^6 bits/second. Transmitting a 1 MB (8 Mb) file takes at minimum 8 Mb ÷ 100 Mbps = 80 ms of transmission time, plus propagation delay to the server.

## See Also

- [[throughput|Throughput Is the Actual Rate at Which Data Is Successfully Delivered]]
- [[latency|Latency Is the Total Time a Packet Takes to Travel from Source to Destination]]
- [[throughput-and-bottleneck-links|Throughput Is Constrained by the Slowest Link — the Bottleneck — on the End-to-End Path]]
