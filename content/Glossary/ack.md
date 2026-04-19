---
title: "An ACK Is a Transport-Layer Message Confirming Successful Data Receipt"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# An ACK Is a Transport-Layer Message Confirming Successful Data Receipt

An ACK (Acknowledgement) is a control message sent by the receiver back to the sender confirming that data has been received correctly — TCP uses cumulative ACKs that specify the next expected byte, enabling the sender to detect loss and control retransmission.

## Explanation

Acknowledgements are the core of reliable data transfer. Without ACKs, the sender has no way of knowing whether its data was received. In TCP, the receiver sends an ACK for every segment received (or uses delayed ACKs, sending one ACK per two segments to reduce overhead). The **ACK number** field in the TCP header specifies the byte sequence number of the next byte the receiver expects — not the last byte received. This is cumulative acknowledgement.

For example, if the receiver has successfully received bytes 0–999, it sends ACK=1000, meaning "I've got everything up to byte 999; please send byte 1000 next." If bytes 1000–1499 then arrive (out of order, with 1000–1499 missing), the receiver sends duplicate ACKs for 1000 — signalling the gap.

**Duplicate ACKs** (three or more in a row for the same byte) are an indication that a segment was lost — this triggers TCP fast retransmit. If no ACK arrives before the retransmission timeout (RTO), the sender retransmits the unacknowledged segment.

In UDP there are no ACKs — the protocol offers no confirmation of delivery.

## Key Points

- ACK: receiver confirmation that data was received correctly
- TCP ACK number = next expected byte (cumulative)
- Duplicate ACK: receiver re-ACKs last in-order byte when out-of-order data arrives
- 3 duplicate ACKs → fast retransmit (sender retransmits without waiting for timeout)
- No ACK before RTO → retransmission timeout → sender retransmits
- UDP: no ACKs — no reliability

## Example

Sender transmits bytes 0–2999 in three segments of 1000 bytes. Segment 2 (bytes 1000–1999) is lost. Receiver gets segment 1 (bytes 0–999) → sends ACK=1000. Gets segment 3 (bytes 2000–2999) out of order → sends ACK=1000 again (duplicate). Gets segment 3 again (sender retransmits more) → sends ACK=1000 again. Three duplicates trigger fast retransmit of segment 2.

## See Also

- [[reliable-data-transfer-principles|Reliable Data Transfer Builds Correctness on Top of an Unreliable Channel]]
- [[tcp-fast-retransmit|TCP Fast Retransmit Uses Duplicate ACKs to Retransmit Before Timeout]]
- [[tcp-segment-structure|TCP Segment Header Carries Sequence Numbers, ACKs, and Control Flags]]
