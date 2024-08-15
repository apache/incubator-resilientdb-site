"use client";
import { Publication } from "@/types/publication";
import SectionTitle from "../Common/SectionTitle";
import SinglePublication from "./SinglePublication";
import { useState, useEffect } from 'react';

const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];

const publicationData: Publication[] = [
  {
    id: 1,
    name: "Blockchain Transaction Processing",
    venue: "Springer 2018",
    year: 2018,
    content:
      "Read Publication",
    publink: "https://www.researchgate.net/publication/325116198_Blockchain_Transaction_Processing",
    award: ""
  },
  {
    id: 2,
    name: "Cluster Sending Protocols",
    venue: "DISC 2019",
    year: 2019,
    content:
      "Read Publication",
    publink: "https://expolab.org/papers/csp_disc2019.pdf",
    award: ""
  },
  {
    id: 3,
    name: "Wait-free Consensus",
    venue: "DISC 2019",
    year: 2019,
    content:
      "Read Publication",
    publink: "https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.DISC.2019.44",
    award: ""
  },
  {
    id: 4,
    name: "ResilientDB Global Consensus",
    venue: "PVLDB 2020",
    year: 2020,
    content:
      "Read Publication",
    publink: "https://www.researchgate.net/publication/339866008_ResilientDB_global_scale_resilient_blockchain_fabric",
    award: ""
  },
  {
    id: 5,
    name: "Architectural Lessons Learned",
    venue: "ICDCS 2020",
    year: 2020,
    content:
      "Read Publication",
    publink: "https://arxiv.org/abs/1911.09208",
    award: ""
  },
  {
    id: 6,
    name: "Coordination-Free Replication",
    venue: "ICDT 2020",
    year: 2019,
    content:
      "Read Publication",
    publink: "https://drops.dagstuhl.de/opus/volltexte/2020/11941/pdf/LIPIcs-ICDT-2020-17.pdf",
    award: ""
  },
  {
    id: 7,
    name: "Building High Throughput Permissioned Blockchain",
    venue: "VLDB 2020",
    year: 2020,
    content:
      "View Theory",
    publink: "https://expolab.org/papers/Tutorial%20-%20Theory%20-%20VLDB%202020.pdf",
    award: ""
  },
  {
    id: 8,
    name: "ByShard Theoretical Sharding Foundation",
    venue: "PVLDB 2021",
    year: 2021,
    content:
      "Read Publication",
    publink: "https://expolab.org/papers/byshard-vldb.pdf",
    award: ""
  },
  {
    id: 9,
    name: "Proof-of-Execution",
    venue: "EDBT 2021",
    year: 2021,
    content:
      "Read Publication",
    publink: "https://www.researchgate.net/publication/337019762_Proof-of-Execution_Reaching_Consensus_through_Fault-Tolerant_Speculation",
    award: ""
  },
  {
    id: 10,
    name: "Resilient Concurrent Consensus",
    venue: "ICDE 2021",
    year: 2021,
    content:
      "Read Publication",
    publink: "https://ieeexplore.ieee.org/document/9458641",
    award: ""
  },
  {
    id: 11,
    name: "RingBFT Practical Sharded Topology",
    venue: "EDBT 2022",
    year: 2022,
    content:
      "Read Publication",
    publink: "https://arxiv.org/pdf/2107.13047.pdf",
    award: ""
  },
  {
    id: 12,
    name: "Power-of-Collaboration Consensus",
    venue: "IEEE Data Engineering Bulletin 2022",
    year: 2022,
    content:
      "Read Publication",
    publink: "http://sites.computer.org/debull/A22june/p25.pdf",
    award: ""
  },
  {
    id: 13,
    name: "Reliable Cluster Sending Protocols",
    venue: "FoIKS 2022",
    year: 2022,
    content:
      "Read Publication",
    publink: "https://expolab.org/papers/CSP%20-%20FoIKs%202022.pdf",
    award: ""
  },
  {
    id: 14,
    name: "Dissecting BFT Consensus",
    venue: "EuroSys 2023",
    year: 2023,
    content:
      "Read Publication",
    publink: "https://dl.acm.org/doi/10.1145/3552326.3587455",
    award: "Best Paper Award"
  },
  {
    id: 15,
    name: "Cerberus Minimalistic Sharded Consensus",
    venue: "JSys 2023",
    year: 2023,
    content:
      "Read Publication",
    publink: "https://escholarship.org/uc/item/6h427354",
    award: ""
  },
  {
    id: 16,
    name: "Probabilistic Cluster Sending",
    venue: "JSys 2023",
    year: 2023,
    content:
      "Read Publication",
    publink: "https://escholarship.org/uc/item/97s0f1gh",
    award: ""
  },
  {
    id: 17,
    name: "Chemistry behind Agreement",
    venue: "CIDR 2023",
    year: 2023,
    content:
      "Read Publication",
    publink: "https://www.cidrdb.org/cidr2023/papers/p85-gupta.pdf",
    award: ""
  },
  {
    id: 18,
    name: "ByShard Foundation Extended",
    venue: "VLDBJ 2023",
    year: 2023,
    content:
      "Read Publication",
    publink: "https://link.springer.com/article/10.1007/s00778-023-00794-0",
    award: ""
  },
  {
    id: 19,
    name: "Reliable Transactions in Serverless-Edge Architecture",
    venue: "ICDE 2023",
    year: 2023,
    content:
      "Read Publication",
    publink: "https://arxiv.org/abs/2201.00982",
    award: ""
  },
  {
    id: 20,
    name: "The Bedrock of BFT",
    venue: "NSDI 2024",
    year: 2024,
    content:
      "Read Publication",
    publink: "https://www.usenix.org/system/files/nsdi24-amiri.pdf",
    award: "Outstanding Paper Award (a.k.a. Best Paper Award)"
  },
  {
    id: 21,
    name: "SpotLess: Concurrent Rotational Consensus",
    venue: "ICDE 2024",
    year: 2024,
    content:
      "Read Publication",
    publink: "https://arxiv.org/abs/2302.02118",
    award: ""
  },
  {
    id: 22,
    name: "Coordination-free Concurrency Control",
    venue: "ACM Middleware 2018",
    year: 2018,
    content:
      "Read Publication",
    publink: "https://dl.acm.org/doi/10.1145/3274808.3274810",
    award: "Best Paper Award"
  },
  {
    id: 23,
    name: "HotStuff-1: Linear Consensus with One-Phase Speculation",
    venue: "arXiv 2024",
    year: 2024,
    content:
      "Read Publication",
    publink: "https://arxiv.org/abs/2408.04728",
    award: ""
  }
];

const Publications = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const firstItem = publicationData.find(t => t.year === selectedYear);
    setActiveId(firstItem ? firstItem.id : null);
  }, [selectedYear]);

  return (
    <section className="relative z-10 py-10 md:py-10 lg:py-10" style={{ backgroundColor: '#0F0F1A' }}>
      <div className="container">
        <SectionTitle
          title="Publications"
          paragraph="Our publications over the years"
          center
        />
        <SinglePublication publications={publicationData} years={years} selectedYear={selectedYear} setSelectedYear={setSelectedYear} activeId={activeId} setActiveId={setActiveId} />
      </div>
    </section>
  );
};

export default Publications;
