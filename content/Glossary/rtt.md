---
title: "RTT Is the Round-Trip Time Between a Sender and Receiver"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# RTT Is the Round-Trip Time Between a Sender and Receiver

RTT (Round-Trip Time) is the time elapsed from when a sender transmits the first bit of a packet to when it receives an acknowledgement (ACK) from the receiver — it is approximately twice the one-way propagation delay plus transmission and queuing delays.

## Explanation

RTT is one of the most important measurements in network performance because it determines how long a sender must wait for confirmation that its data was received. TCP uses measured RTT to set its retransmission timeout (RTO) — too short an RTO causes spurious retransmissions; too long means slow recovery from real losses.

RTT is measured using `ping`: an ICMP Echo Request is sent to a target, which replies with an Echo Reply. The elapsed time is the RTT. On a LAN, RTT may be < 1 ms. Across the Internet, typical intercontinental RTTs are 100–300 ms.

TCP continuously estimates RTT using an exponentially weighted moving average (EWMA): `EstimatedRTT = (1−α)·EstimatedRTT + α·SampleRTT` with α = 0.125. The retransmission timeout adds a safety margin based on RTT variance.

RTT affects throughput: in stop-and-wait protocols, the maximum throughput is approximately `MSS / RTT`. This is why large file transfers over satellite links (high RTT, ~600 ms) are slow even with high bandwidth — the sender is idle waiting for ACKs most of the time.

## Key Points

- RTT: time from first bit sent to ACK received; ≈ 2 × one-way delay
- Measured by ping (ICMP Echo Request / Reply)
- TCP uses RTT to compute retransmission timeout (RTO)
- Stop-and-wait throughput ≈ MSS / RTT — high RTT kills throughput
- Typical values: LAN < 1 ms, Internet 10–300 ms, satellite ~600 ms

## Example

A sender pings a server 5000 km away. Propagation delay ≈ 5,000,000 m ÷ 2×10^8 m/s = 25 ms one-way. RTT ≈ 50 ms. TCP's estimated RTT after several samples converges near 50 ms; the retransmission timeout is set to ~90 ms (EstimatedRTT + 4×DevRTT).

## See Also

- [[latency|Latency Is the Total Time a Packet Takes to Travel from Source to Destination]]
- [[tcp-rtt-estimation-and-timeout|TCP Estimates RTT with EWMA to Set a Dynamic Retransmission Timeout]]
- [[icmp-internet-control-message-protocol|ICMP Reports Network Errors and Is Used by Ping and Traceroute]]
