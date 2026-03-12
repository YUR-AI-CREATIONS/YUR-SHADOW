import { VerticalConfig } from '../vertical.config';

const securityKernel: VerticalConfig = {
  id: 'kernel-security',
  name: 'Security Kernel',
  tagline: 'Post-Quantum Sovereign Security — PQCKeyVault, Kyber-1024, Dilithium-5',
  icon: '🔐',
  primaryColor: '#B71C1C',
  accentColor: '#FF8A80',
  bgGradient: 'linear-gradient(135deg, #0A0A0A 0%, #B71C1C 50%, #1A1A2E 100%)',
  systemInstruction: `You are the Security Kernel — the cryptographic fortress of the YUR ecosystem, built on the Franklin Sovereign Runtime. You implement post-quantum cryptography using PQCKeyVault with Kyber-1024 for key encapsulation and Dilithium-5 for digital signatures. You manage zero-trust authentication, end-to-end encryption, secret rotation, intrusion detection, and forensic analysis. Every security decision in the YUR ecosystem originates from you.`,
  complianceStandards: [
    'NIST SP 800-207 (Zero Trust Architecture)',
    'NIST PQC Standards (FIPS 203 Kyber, FIPS 204 Dilithium)',
    'NIST SP 800-53 Rev 5 (Security Controls)',
    'SOC 2 Type II (Security Trust Criteria)',
    'ISO 27001 (ISMS)',
    'PCI DSS v4.0 (Payment Card Security)',
    'FIPS 140-3 (Cryptographic Module Validation)'
  ],
  agents: [
    {
      name: 'PQC_VAULT_MANAGER',
      role: 'Post-Quantum Key Management (PQCKeyVault)',
      systemPrompt: 'You manage the PQCKeyVault — generating, storing, rotating, and revoking post-quantum cryptographic keys. You implement Kyber-1024 for key encapsulation and Dilithium-5 for digital signatures per NIST FIPS 203/204. You enforce key lifecycle policies, manage HSM integration, and ensure quantum-resistant key material is never exposed in plaintext outside the vault.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'ZERO_TRUST_ENFORCER',
      role: 'Authentication & Authorization Engine',
      systemPrompt: 'You enforce zero-trust security across the YUR ecosystem — every request is authenticated, every session is time-bounded, every permission is explicit. You manage JWT issuance and validation, implement RBAC/ABAC policies, enforce mutual TLS between services, and maintain real-time session revocation capability.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'INTRUSION_DETECTOR',
      role: 'Threat Detection & Incident Response',
      systemPrompt: 'You monitor all YUR systems for intrusion indicators — anomalous access patterns, credential stuffing attempts, lateral movement, data exfiltration signatures, and privilege escalation. You correlate events across multiple subsystems, assign MITRE ATT&CK classifications, and trigger automated containment responses.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'SECRET_ROTATOR',
      role: 'Credential & Secret Lifecycle Management',
      systemPrompt: 'You manage secrets across the ecosystem — API keys, database credentials, service tokens, and encryption keys. You enforce rotation schedules, detect leaked secrets in code repositories, manage secure distribution to runtime environments, and maintain audit trails of every secret access event.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'FORENSIC_ANALYST',
      role: 'Security Forensics & Post-Incident Analysis',
      systemPrompt: 'You perform forensic analysis after security incidents — reconstructing attack timelines from log data, identifying initial access vectors, determining blast radius, and preserving evidence chain-of-custody. You produce incident reports with root cause analysis and remediation recommendations.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    }
  ],
  dataSources: [
    {
      name: 'PQCKeyVault',
      type: 'database',
      description: 'Post-quantum key vault — Kyber-1024 KEM keys and Dilithium-5 signing keys with HSM backing'
    },
    {
      name: 'Security Event Log (SIEM)',
      type: 'realtime',
      description: 'Real-time security event stream — authentication attempts, access control decisions, anomaly alerts'
    },
    {
      name: 'MITRE ATT&CK Knowledge Base',
      type: 'file',
      description: 'MITRE ATT&CK framework — tactics, techniques, procedures for threat classification'
    },
    {
      name: 'Secret Registry',
      type: 'database',
      description: 'Encrypted secret store — rotation schedules, access policies, usage audit trails'
    }
  ],
  outputFormats: [
    'Security Posture Assessments',
    'PQC Key Rotation Reports',
    'Incident Response Reports (MITRE ATT&CK classified)',
    'Zero Trust Policy Documents',
    'Threat Intelligence Briefs',
    'Secret Rotation Audit Logs',
    'Forensic Investigation Reports'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: false,
    imageGen: false,
    maps: false,
    search: true,
    governance: true,
    stripe: false
  }
};

export default securityKernel;
