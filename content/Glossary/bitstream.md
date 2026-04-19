---
title: "Bitstream"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# Bitstream

A bitstream is a continuous sequence of bits transmitted serially over a communication channel — it is the physical-layer representation of data, where all higher-layer structure (frames, packets, bytes) has been serialised into a single stream of 0s and 1s.

## Explanation

At the bottom of the network stack, the physical layer transmits data as a bitstream: a sequential flow of binary digits, one bit after another, over the physical medium (electrical pulses on copper, light pulses on fibre, radio waves in Wi-Fi). The physical layer has no concept of bytes, packets, or frames — it simply converts bits to physical signals and back.

The layers above the physical layer impose structure on the bitstream. The **link layer** frames the bitstream: it recognises the start-of-frame delimiter and the end-of-frame delimiter (or knows the frame length) to extract one logical frame from the raw bit flow. The **network layer** then finds its datagram within the frame payload, and so on up the stack.

**TCP provides a byte-stream service** to the application layer. From the application's perspective, TCP delivers a continuous, ordered sequence of bytes (a stream), not discrete packets. The application reads from a socket as if reading from a file — it doesn't see TCP segment boundaries. This is distinct from the physical-layer bitstream concept, but both use "stream" in the sense of a continuous, ordered flow.

The term "bitstream" is also used in video (e.g., H.264 bitstream, AAC bitstream) to refer to the encoded binary sequence produced by a codec, regardless of how it is transmitted.

## Key Points

- Bitstream: serial sequence of 0s and 1s at the physical layer
- Physical layer: converts bits to/from physical signals; no structure, only bits
- Link layer imposes frame boundaries on the raw bitstream
- TCP byte-stream: ordered, reliable delivery of bytes to application (not same as physical bitstream)
- Also used in codecs: the binary-encoded output of a video/audio encoder

## Example

A Wi-Fi card transmits an Ethernet frame containing an IP datagram. The MAC layer serialises the frame into a bitstream: preamble bits, start delimiter bits, destination MAC address bits, source MAC bits, type bits, IP datagram bits, FCS bits — all transmitted as a modulated radio signal. The receiving card samples the radio signal, recovers the bitstream, and reassembles the frame.

## See Also

- [[physical-media-types|Physical Media Types]]
- [[encapsulation|Encapsulation in Protocol Layers]]
- [[tcp-ip-internet-stack|TCP/IP Internet Stack]]
