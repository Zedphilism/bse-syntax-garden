---
title: "Flow Control Prevents the Sender from Overwhelming the Receiver's Buffer"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# Flow Control Prevents the Sender from Overwhelming the Receiver's Buffer

Flow control is a transport-layer speed-matching mechanism in which the receiver advertises the free space remaining in its receive buffer (rwnd), and the sender limits the amount of unacknowledged data in flight to that value, preventing buffer overflow at the receiver.

## Explanation

Even if the network can carry data quickly, the receiver may not be able to process it fast enough — the receiving application may be slow, or the buffer may fill up during a burst. Without flow control, the sender would transmit data faster than the receiver can accept it, causing the receiver's buffer to overflow and data to be silently dropped.

TCP flow control uses the **receive window (rwnd)** field in the TCP segment header. The receiver sets rwnd to the number of free bytes in its receive buffer: `rwnd = RcvBuffer − (bytes received but not yet read by the app)`. The sender enforces: `bytes in flight ≤ rwnd`. If the receiver's buffer fills up (rwnd = 0), the sender pauses. It periodically sends 1-byte probe segments to detect when the buffer frees up.

Flow control is **end-to-end** between sender and receiver. It is fundamentally different from congestion control, which responds to network capacity. A connection can be flow-controlled even on a lightly loaded network if the receiving application is simply slow.

The effective sending window = `min(cwnd, rwnd)`: both the network's capacity and the receiver's buffer must be respected.

## Key Points

- Flow control: matches sender rate to receiver's buffer capacity
- Mechanism: rwnd advertised in TCP header (bytes free in receive buffer)
- Sender constraint: bytes in flight ≤ rwnd
- rwnd = 0: sender pauses; uses 1-byte probes to detect buffer freeing
- Distinct from congestion control (receiver buffer vs. network capacity)
- Effective window = min(cwnd, rwnd)

## Example

A database server receives data at 1 Gbps, but the database write process can only consume 100 Mbps. The receive buffer fills up in milliseconds. rwnd drops to 0 → sender pauses. As the DB process catches up, rwnd rises to 64KB → sender resumes at 64 KB per RTT until it fills up again. Throughput is naturally limited to the application processing rate.

## See Also

- [[tcp-flow-control|TCP Flow Control Uses the Receive Window to Prevent Buffer Overflow]]
- [[congestion-control|Congestion Control Prevents Senders from Overloading the Network]]
- [[tcp-segment-structure|TCP Segment Header Carries Sequence Numbers, ACKs, and Control Flags]]
