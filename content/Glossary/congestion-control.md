---
title: "Congestion Control Prevents Senders from Overloading the Network"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# Congestion Control Prevents Senders from Overloading the Network

Congestion control is a transport-layer mechanism that limits the rate at which a sender injects data into the network, in response to detected or inferred congestion, to prevent router buffers from overflowing and to share bandwidth fairly among competing flows.

## Explanation

When too many senders send too much data too fast, router queues fill up, packets are dropped, and all flows suffer. Congestion control is the self-regulation mechanism that prevents this collapse.

TCP implements congestion control using a **congestion window (cwnd)**: the maximum number of unacknowledged bytes the sender can have in flight (in addition to the flow-control limit rwnd). The sender's effective limit is `min(cwnd, rwnd)`.

TCP infers congestion from two signals: (1) a **timeout** — no ACK received within the RTO — treated as severe congestion; (2) **three duplicate ACKs** — a segment was lost but the network is still delivering packets — treated as mild congestion.

TCP's response follows **AIMD** (Additive Increase, Multiplicative Decrease): on loss (mild), cut cwnd in half; then grow linearly by 1 MSS per RTT. On timeout (severe), reset cwnd to 1 MSS and enter slow start. Over time, AIMD causes cwnd to oscillate in a saw-tooth pattern around the available bandwidth — converging to a fair allocation among all competing flows.

Congestion control operates at the **network** level (how much to send into the network), distinct from **flow control** (how much the receiver can buffer).

## Key Points

- Congestion control: limits sending rate to prevent network overload
- TCP mechanism: congestion window (cwnd); limit = min(cwnd, rwnd)
- Slow Start: cwnd starts at 1 MSS; doubles each RTT until ssthresh
- AIMD: additive increase (linear growth), multiplicative decrease (halve on loss)
- Timeout → cwnd = 1 MSS (slow start); 3 dup ACKs → cwnd = cwnd/2 (fast recovery)
- Distinct from flow control (which manages receiver buffer, not network capacity)

## Example

Two TCP flows share a 10 Mbps bottleneck. Flow A starts with cwnd=1 MSS and doubles (slow start): 1, 2, 4, 8 MSS. At ssthresh it switches to linear growth. Flow B does the same. They converge to each getting ~5 Mbps — fair sharing via independent AIMD.

## See Also

- [[tcp-congestion-control|TCP Congestion Control Uses AIMD to Share Network Capacity Fairly]]
- [[flow-control|Flow Control Prevents the Sender from Overwhelming the Receiver's Buffer]]
- [[tcp-fast-retransmit|TCP Fast Retransmit Uses Duplicate ACKs to Retransmit Before Timeout]]
