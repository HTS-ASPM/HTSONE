import { useState } from 'react';
import { CodeXml, Cloud, BrainCircuit, Database, Radio, ScanSearch, Sparkles, GitPullRequest } from 'lucide-react';
import { BRAND_LOGO_URL } from '@/lib/brand';
import './SecurityLandscape.css';
const areas = [
 {name:'Applications',title:'Application security',subtitle:'Detection & auto-fix',icon:CodeXml,description:'Find code risks, review auto-generated fixes, and bring security into pull requests and your IDE.'},
 {name:'Cloud',title:'Cloud security',subtitle:'Exposure & posture',icon:Cloud,description:'Investigate cloud misconfigurations and exposure paths.'},
 {name:'AI',title:'AI security',subtitle:'Models & agents',icon:BrainCircuit,description:'Discover AI models and agents, then examine their risks.'},
 {name:'Data',title:'Data security',subtitle:'Discovery & classification',icon:Database,description:'Discover sensitive data and understand its exposure.'},
 {name:'APIs',title:'API security',subtitle:'Requests & responses',icon:Radio,description:'Inspect API traffic and investigate risky endpoints.'},
];
const scenes = [
 <div className="code-scene"><span>Auto-fix · proposed diff</span><b className="risk-line">− "secret"</b><b className="fix-line">+ process.env.JWT_SECRET</b><em>Review before merging</em></div>,
 <div className="cloud-scene"><span className="exposure">Internet</span><i>↓</i><span>Workload</span><i>↓</i><span className="exposure">Data store</span><em>Illustrative exposure path</em></div>,
 <div className="ai-scene"><span>Model</span><div>╲ &nbsp; │ &nbsp; ╱</div><strong>AI inventory</strong><div>╱ &nbsp; │ &nbsp; ╲</div><span>Agents · MCP</span><em>Discover AI usage</em></div>,
 <div className="data-scene"><div className="data-stack">▱ &nbsp; ▱ &nbsp; ▱</div><i>↓ discover & classify</i><span>Sensitive data</span><span>Exposure context</span><em>Understand data risk</em></div>,
 <div className="api-scene"><span>GET /api/records</span><div className="request-inspection"><span>Request</span><b>↓ inspect ↓</b><span>Response</span></div><span className="api-response">Sensitive data over HTTP</span><em>Review endpoint evidence</em></div>,
];
export default function SecurityLandscape(){
 const [selected,setSelected]=useState(0);
 return <div className="security-landscape" aria-label="HTSOne native security capabilities"><div className="hm-surface">
 <header><span>HTSOne · NATIVE SECURITY</span><span>FIVE SECURITY DISCIPLINES</span></header>
 <h2 className="hm-title">See the risk.<br/><span>Across every layer.</span></h2>
 <div className="hm-map">
 {areas.map((area,index)=>{const Icon=area.icon;return <button key={area.name} type="button" className="hm-node" aria-pressed={selected===index} aria-label={area.title} onClick={()=>setSelected(index)} style={{'--signal-delay':`${index*-.45}s`}}><Icon size={26} aria-hidden="true"/><strong>{area.name}</strong><small>{area.subtitle}</small><div className="pillar-scene" aria-hidden="true">{scenes[index]}</div></button>})}
 <div className="hm-core"><div className="hm-mark"><svg width="57" height="67" viewBox="100 20 570 650" aria-label="HTSOne logo mark" role="img"><image href={BRAND_LOGO_URL} width="1525" height="688" style={{filter:'brightness(0) invert(1)'}}/></svg></div><span>Native security engines</span></div>
 </div>
 <div className="engine-caption"><span>FIVE SECURITY DISCIPLINES</span><strong>Built into HTSOne.</strong><span>ONE CONNECTED VIEW</span></div>
 <div className="hm-detail" aria-live="polite"><strong>{areas[selected].title}</strong><span>{areas[selected].description}</span></div>
 <div className="hm-actions"><div><ScanSearch/><strong>Discover</strong><span>Find the risks</span></div><b aria-hidden="true">→</b><div><Sparkles/><strong>Investigate</strong><span>Understand the evidence</span></div><b aria-hidden="true">→</b><div><GitPullRequest/><strong>Review &amp; remediate</strong><span>Act on supported fixes</span></div></div>
 <div className="workflow-preview"><div className="workflow-heading">SECURITY WHERE YOU WORK</div><div className="workflow-options">
 <div><Sparkles className="workflow-icon"/><strong>Auto-fix</strong><p>Generate supported fixes.<br/>Review the proposed changes.</p></div>
 <div><GitPullRequest className="workflow-icon"/><strong>PR security gates</strong><p>Check changes in pull requests.<br/>Apply your security policies.</p></div>
 <div><CodeXml className="workflow-icon"/><strong>IDE plugins</strong><p>Bring security into<br/>your editor.</p></div>
 </div></div><footer>Illustrated product capabilities · Select an area to explore</footer>
 </div></div>;
}
