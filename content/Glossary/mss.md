---
title: "MSS Is the Maximum Bytes of Data TCP Puts in a Single Segment"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# MSS Is the Maximum Bytes of Data TCP Puts in a Single Segment

MSS (Maximum Segment Size) is the largest number of bytes of application data that TCP will place in a single segment, negotiated during the three-way handshake and typically set to MTU − 40 bytes to avoid IP fragmentation.

## Explanation

MSS limits the data portion of a TCP segment (not the total segment size including headers). The goal is to size segments so that the resulting IP datagram (IP header + TCP header + data = 20 + 20 + MSS bytes) fits within the link's MTU without requiring fragmentation.

For Ethernet (MTU = 1500 bytes): MSS = 1500 − 20 (IP) − 20 (TCP) = **1460 bytes**.

Each side announces its MSS in the SYN and SYN-ACK during the three-way handshake. The actual MSS used is the minimum of the two announced values. If no MSS option is present, TCP defaults to 536 bytes (RFC 879).

MSS is important for congestion control: the congestion window (cwnd) is measured in multiples of MSS. Slow start begins with cwnd = 1 MSS and grows to 2 MSS, 4 MSS, etc.

Note: MSS ≠ MTU. MSS is the data-only payload limit for TCP; MTU is the total datagram size limit for IP.

## Key Points

- MSS: max data bytes per TCP segment (not including TCP/IP headers)
- Typical value: 1460 bytes (Ethernet MTU 1500 − 40 bytes of headers)
- Negotiated in SYN/SYN-ACK; use min of the two announced values
- Prevents IP fragmentation by keeping datagrams within MTU
- cwnd measured in MSS units; slow start starts at cwnd = 1 MSS

## Example

Host A announces MSS=1460 in its SYN; Host B announces MSS=1380 (smaller MTU path). The connection uses MSS=1380 — the smaller of the two. Each TCP segment carries at most 1380 bytes of data.

## See Also

- [[mtu|MTU Is the Maximum Size of a Datagram That a Link Can Carry]]
- [[tcp-segment-structure|TCP Segment Header Carries Sequence Numbers, ACKs, and Control Flags]]
- [[tcp-congestion-control|TCP Congestion Control Uses AIMD to Share Network Capacity Fairly]]
