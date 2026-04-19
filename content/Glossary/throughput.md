---
title: "Throughput Is the Actual Rate at Which Data Is Successfully Delivered"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# Throughput Is the Actual Rate at Which Data Is Successfully Delivered

Throughput is the rate at which bits are successfully transferred from sender to receiver over some time period, measured in bps — it is always ≤ bandwidth and is constrained by the slowest (bottleneck) link on the end-to-end path.

## Explanation

While bandwidth describes a link's capacity, throughput describes what is actually achieved. Throughput is always less than or equal to the minimum link bandwidth along the path (the bottleneck), and can be further reduced by queuing, protocol overhead, congestion, and retransmissions.

For a path from source to destination passing through N links with rates R₁, R₂, …, R_N, the **end-to-end throughput** is constrained by the bottleneck: `min(R₁, R₂, …, R_N)`. On most home Internet connections, the access link (the last-mile link between the ISP and the home) is the bottleneck.

**Instantaneous throughput** is the rate at a given instant. **Average throughput** is the total bits transferred divided by total transfer time. For a large file transfer, average throughput ≈ min bandwidth along the path. For a short transfer, TCP's slow start may prevent the connection from reaching the bottleneck rate.

## Key Points

- Throughput ≤ bandwidth (capacity); the difference is due to congestion, overhead, loss
- End-to-end throughput = min link rate along the path (bottleneck)
- Instantaneous vs. average throughput
- TCP congestion control and slow start affect achievable throughput

## Example

A file server has a 1 Gbps link; the client has a 100 Mbps broadband connection. The bottleneck is the client's 100 Mbps access link. Maximum throughput ≈ 100 Mbps, regardless of the server's 1 Gbps link.

## See Also

- [[bandwidth|Bandwidth Is the Maximum Rate at Which Data Can Be Transmitted on a Link]]
- [[latency|Latency Is the Total Time a Packet Takes to Travel from Source to Destination]]
- [[throughput-and-bottleneck-links|Throughput Is Constrained by the Slowest Link — the Bottleneck — on the End-to-End Path]]
