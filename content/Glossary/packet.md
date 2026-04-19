---
title: "A Packet Is a Fixed-Size Chunk of Data Routed Independently Through the Network"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# A Packet Is a Fixed-Size Chunk of Data Routed Independently Through the Network

A packet is a unit of data transmission in packet-switched networks, consisting of a header (addressing and control information) and a payload (the actual data), where each packet is forwarded independently from source to destination.

## Explanation

Rather than dedicating a continuous circuit between two endpoints (as in circuit switching), packet-switched networks like the Internet divide data into packets. Each packet carries a destination address in its header; routers examine this address and forward the packet hop-by-hop toward the destination. Packets from the same message may travel different paths and arrive out of order — it is the transport layer's job to reassemble them.

The term "packet" is somewhat generic. At the network layer, the unit is called a **datagram** (for IP). At the transport layer, the unit is called a **segment** (for TCP) or **datagram** (for UDP). At the link layer, the unit is called a **frame**. In casual usage, "packet" refers to any of these.

Packet switching has two key advantages over circuit switching: (1) it shares network resources efficiently among many users, since idle users consume no bandwidth; (2) it is resilient to failures, since packets can be rerouted around failed links.

## Key Points

- Packet = header (control/address info) + payload (data)
- Each packet forwarded independently; may take different paths
- Network layer unit: datagram; transport layer unit: segment; link layer unit: frame
- Packet switching: more efficient than circuit switching for bursty traffic

## Example

Sending a 1 MB file over the Internet: the OS divides it into ~667 packets of 1500 bytes each. Each packet contains the destination IP, sequence information, and a chunk of file data. Routers forward each independently; the receiver reassembles them in order using TCP sequence numbers.

## See Also

- [[datagram|A Datagram Is the Network-Layer Packet Forwarded by IP Routers]]
- [[segment|A Segment Is the Transport-Layer Unit Exchanged Between TCP Endpoints]]
- [[packet-switching-store-and-forward|Packet Switching Forwards Data in Chunks Using Store-and-Forward at Each Router]]
