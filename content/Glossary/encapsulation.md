---
title: "Encapsulation Wraps Data with Layer Headers as It Descends the Protocol Stack"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# Encapsulation Wraps Data with Layer Headers as It Descends the Protocol Stack

Encapsulation is the process by which each layer of the network stack wraps the data handed down from the layer above with its own header (and sometimes trailer), forming a new protocol data unit (PDU) that hides the details of higher-layer data from lower layers.

## Explanation

The layered network architecture means each layer only knows about the PDU it receives from above — it treats it as opaque payload and adds its own control information. On the sending side, data travels down the stack:

1. **Application layer:** produces a **message** (e.g., an HTTP request)
2. **Transport layer:** wraps it in a TCP/UDP header → **segment** (TCP) or **datagram** (UDP)
3. **Network layer:** wraps the segment in an IP header → **IP datagram**
4. **Link layer:** wraps the datagram in a frame header + trailer → **frame**
5. **Physical layer:** transmits the frame as bits on the wire

On the receiving side, each layer **decapsulates** the PDU: it reads and removes its own header, then passes the payload up to the next layer.

This layering and encapsulation is what allows protocols to be developed and changed independently. An HTTP programmer doesn't need to know whether the underlying transport is TCP or QUIC; the IP layer doesn't care whether the payload is TCP or UDP; the link layer doesn't care whether the network layer is IPv4 or IPv6.

## Key Points

- Encapsulation: each layer adds its header to the payload from above
- PDU names: message (app) → segment/datagram (transport) → datagram (network) → frame (link)
- Receiving side: each layer strips its header before passing data up
- Each layer treats the payload as opaque — it only reads its own header
- Enables independent development and replacement of protocols at each layer

## Example

An HTTP GET message (application) → wrapped by TCP into a segment (adds seq#, ACK#, ports) → wrapped by IP into a datagram (adds src/dst IP, TTL) → wrapped by Ethernet into a frame (adds src/dst MAC, FCS). The Ethernet frame is transmitted as 0s and 1s. At the receiver, each layer peels off its header in reverse order.

## See Also

- [[encapsulation-in-protocol-layers|Encapsulation Wraps Data with Layer-Specific Headers as It Descends the Protocol Stack]]
- [[tcp-ip-internet-stack|The TCP/IP Internet Stack Has Five Layers from Physical Bits to Application Messages]]
- [[datagram|A Datagram Is the Network-Layer Packet Forwarded by IP Routers]]
