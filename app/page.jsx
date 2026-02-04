'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Announcement from "./components/Announcement";

function PlusIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 6l1-2h6l1 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 6l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M19.4 15a7.97 7.97 0 0 0 .1-2l2-1.5-2-3.5-2.3.5a8.02 8.02 0 0 0-1.7-1l-.4-2.3h-4l-.4 2.3a8.02 8.02 0 0 0-1.7 1l-2.3-.5-2 3.5 2 1.5a7.97 7.97 0 0 0 .1 2l-2 1.5 2 3.5 2.3-.5a8.02 8.02 0 0 0 1.7 1l.4 2.3h4l.4-2.3a8.02 8.02 0 0 0 1.7-1l2.3.5 2-3.5-2-1.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RefreshIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M4 12a8 8 0 0 1 12.5-6.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 5h3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12a8 8 0 0 1-12.5 6.9" stroke="currentColor" strokeWidth="2" />
      <path d="M8 19H5v-3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ChevronIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SortIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M3 7h18M6 12h12M9 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GridIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ListIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon({ filled, ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? "var(--accent)" : "none"}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon({ filled, ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? "var(--danger)" : "none"}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="var(--danger)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FolderIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Stat({ label, value, delta }) {
  const dir = delta > 0 ? 'up' : delta < 0 ? 'down' : '';
  return (
    <div className="stat">
      <span className="label">{label}</span>
      <span className={`value ${dir}`}>{value}</span>
    </div>
  );
}

export default function HomePage() {
  const [funds, setFunds] = useState([]);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const timerRef = useRef(null);
  const refreshingRef = useRef(false);

  // 刷新频率状态
  const [refreshMs, setRefreshMs] = useState(30000);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [tempSeconds, setTempSeconds] = useState(30);

  // 全局刷新状态
  const [refreshing, setRefreshing] = useState(false);

  // 收起/展开状态
  const [collapsedCodes, setCollapsedCodes] = useState(new Set());

  // 自选状态
  const [favorites, setFavorites] = useState(new Set());
  const [currentTab, setCurrentTab] = useState('all');

  // 排序状态
  const [sortBy, setSortBy] = useState('default'); // default, name, yield, code

  // 视图模式
  const [viewMode, setViewMode] = useState('card'); // card, list

  // 新增：基金分组功能
  const [fundType, setFundType] = useState('holding'); // holding, custom
  const [customGroups, setCustomGroups] = useState({}); // { groupName: Set(codes) }
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [holdingFunds, setHoldingFunds] = useState(new Set());

  const toggleFavorite = (code) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      localStorage.setItem('favorites', JSON.stringify(Array.from(next)));
      if (next.size === 0 && currentTab === 'fav') setCurrentTab('all');
      return next;
    });
  };

  const toggleHolding = (code) => {
    setHoldingFunds(prev => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      localStorage.setItem('holdingFunds', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const createCustomGroup = () => {
    if (!newGroupName.trim()) return;
    setCustomGroups(prev => ({
      ...prev,
      [newGroupName.trim()]: new Set()
    }));
    localStorage.setItem('customGroups', JSON.stringify({
      ...customGroups,
      [newGroupName.trim()]: []
    }));
    setNewGroupName('');
    setShowGroupModal(false);
  };

  const addToCustomGroup = (fundCode, groupName) => {
    setCustomGroups(prev => {
      const next = { ...prev };
      if (!next[groupName]) next[groupName] = new Set();
      next[groupName].add(fundCode);
      
      // 保存到localStorage
      const toSave = {};
      Object.keys(next).forEach(key => {
        toSave[key] = Array.from(next[key]);
      });
      localStorage.setItem('customGroups', JSON.stringify(toSave));
      
      return next;
    });
  };

  const removeFromCustomGroup = (fundCode, groupName) => {
    setCustomGroups(prev => {
      const next = { ...prev };
      if (next[groupName]) {
        next[groupName].delete(fundCode);
        if (next[groupName].size === 0) {
          delete next[groupName];
        }
      }
      
      // 保存到localStorage
      const toSave = {};
      Object.keys(next).forEach(key => {
        toSave[key] = Array.from(next[key]);
      });
      localStorage.setItem('customGroups', JSON.stringify(toSave));
      
      return next;
    });
  };

  const toggleCollapse = (code) => {
    setCollapsedCodes(prev => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      // 同步到本地存储
      localStorage.setItem('collapsedCodes', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  // 按 code 去重，保留第一次出现的项，避免列表重复
  const dedupeByCode = (list) => {
    const seen = new Set();
    return list.filter((f) => {
      const c = f?.code;
      if (!c || seen.has(c)) return false;
      seen.add(c);
      return true;
    });
  };

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('funds') || '[]');
      if (Array.isArray(saved) && saved.length) {
        const deduped = dedupeByCode(saved);
        setFunds(deduped);
        localStorage.setItem('funds', JSON.stringify(deduped));
        const codes = Array.from(new Set(deduped.map((f) => f.code)));
        if (codes.length) refreshAll(codes);
      }
      const savedMs = parseInt(localStorage.getItem('refreshMs') || '30000', 10);
      if (Number.isFinite(savedMs) && savedMs >= 5000) {
        setRefreshMs(savedMs);
        setTempSeconds(Math.round(savedMs / 1000));
      }
      // 加载收起状态
      const savedCollapsed = JSON.parse(localStorage.getItem('collapsedCodes') || '[]');
      if (Array.isArray(savedCollapsed)) {
        setCollapsedCodes(new Set(savedCollapsed));
      }
      // 加载自选状态
      const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      if (Array.isArray(savedFavorites)) {
        setFavorites(new Set(savedFavorites));
      }
      // 加载持有基金状态
      const savedHolding = JSON.parse(localStorage.getItem('holdingFunds') || '[]');
      if (Array.isArray(savedHolding)) {
        setHoldingFunds(new Set(savedHolding));
      }
      // 加载自定义分组
      const savedGroups = JSON.parse(localStorage.getItem('customGroups') || '{}');
      if (typeof savedGroups === 'object') {
        const groups = {};
        Object.keys(savedGroups).forEach(key => {
          groups[key] = new Set(savedGroups[key] || []);
        });
        setCustomGroups(groups);
      }
      // 加载视图模式
      const savedViewMode = localStorage.getItem('viewMode');
      if (savedViewMode === 'card' || savedViewMode === 'list') {
        setViewMode(savedViewMode);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const codes = Array.from(new Set(funds.map((f) => f.code)));
      if (codes.length) refreshAll(codes);
    }, refreshMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [funds, refreshMs]);

  // --- 辅助：JSONP 数据抓取逻辑 ---
  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.onload = () => {
        document.body.removeChild(script);
        resolve();
      };
      script.onerror = () => {
        document.body.removeChild(script);
        reject(new Error('数据加载失败'));
      };
      document.body.appendChild(script);
    });
  };

  const fetchFundData = async (c) => {
    return new Promise(async (resolve, reject) => {
      // 腾讯接口识别逻辑优化
      const getTencentPrefix = (code) => {
        if (code.startsWith('6') || code.startsWith('9')) return 'sh';
        if (code.startsWith('0') || code.startsWith('3')) return 'sz';
        if (code.startsWith('4') || code.startsWith('8')) return 'bj';
        return 'sz';
      };

      const gzUrl = `https://fundgz.1234567.com.cn/js/${c}.js?rt=${Date.now()}`;

      // 使用更安全的方式处理全局回调，避免并发覆盖
      const currentCallback = `jsonpgz_${c}_${Math.random().toString(36).slice(2, 7)}`;

      // 动态拦截并处理 jsonpgz 回调
      const scriptGz = document.createElement('script');
      // 东方财富接口固定调用 jsonpgz，我们通过修改全局变量临时捕获它
      scriptGz.src = gzUrl;

      const originalJsonpgz = window.jsonpgz;
      window.jsonpgz = (json) => {
        window.jsonpgz = originalJsonpgz; // 立即恢复
        if (!json || typeof json !== 'object') {
          reject(new Error('未获取到基金估值数据'));
          return;
        }
        const gszzlNum = Number(json.gszzl);
        const gzData = {
          code: json.fundcode,
          name: json.name,
          dwjz: json.dwjz,
          gsz: json.gsz,
          gztime: json.gztime,
          gszzl: Number.isFinite(gszzlNum) ? gszzlNum : json.gszzl
        };

        // 获取重仓股票列表
        const holdingsUrl = `https://fundf10.eastmoney.com/FundArchivesDatas.aspx?type=jjcc&code=${c}&topline=10&year=&month=&rt=${Date.now()}`;
        loadScript(holdingsUrl).then(async () => {
          let holdings = [];
          const html = window.apidata?.content || '';
          const rows = html.match(/<tr[\s\S]*?<\/tr>/gi) || [];
          for (const r of rows) {
            const cells = (r.match(/<td[\s\S]*?>([\s\S]*?)<\/td>/gi) || []).map(td => td.replace(/<[^>]*>/g, '').trim());
            const codeIdx = cells.findIndex(txt => /^\d{6}$/.test(txt));
            const weightIdx = cells.findIndex(txt => /\d+(?:\.\d+)?\s*%/.test(txt));
            if (codeIdx >= 0 && weightIdx >= 0) {
              holdings.push({
                code: cells[codeIdx],
                name: cells[codeIdx + 1] || '',
                weight: cells[weightIdx],
                change: null
              });
            }
          }

          holdings = holdings.slice(0, 10);

          if (holdings.length) {
            try {
              const tencentCodes = holdings.map(h => `s_${getTencentPrefix(h.code)}${h.code}`).join(',');
              const quoteUrl = `https://qt.gtimg.cn/q=${tencentCodes}`;

              await new Promise((resQuote) => {
                const scriptQuote = document.createElement('script');
                scriptQuote.src = quoteUrl;
                scriptQuote.onload = () => {
                  holdings.forEach(h => {
                    const varName = `v_s_${getTencentPrefix(h.code)}${h.code}`;
                    const dataStr = window[varName];
                    if (dataStr) {
                      const parts = dataStr.split('~');
                      // parts[5] 是涨跌幅
                      if (parts.length > 5) {
                        h.change = parseFloat(parts[5]);
                      }
                    }
                  });
                  if (document.body.contains(scriptQuote)) document.body.removeChild(scriptQuote);
                  resQuote();
                };
                scriptQuote.onerror = () => {
                  if (document.body.contains(scriptQuote)) document.body.removeChild(scriptQuote);
                  resQuote();
                };
                document.body.appendChild(scriptQuote);
              });
            } catch (e) {
              console.error('获取股票涨跌幅失败', e);
            }
          }

          resolve({ ...gzData, holdings });
        }).catch(() => resolve({ ...gzData, holdings: [] }));
      };

      scriptGz.onerror = () => {
        window.jsonpgz = originalJsonpgz;
        if (document.body.contains(scriptGz)) document.body.removeChild(scriptGz);
        reject(new Error('基金数据加载失败'));
      };

      document.body.appendChild(scriptGz);
      // 加载完立即移除脚本
      setTimeout(() => {
        if (document.body.contains(scriptGz)) document.body.removeChild(scriptGz);
      }, 5000);
    });
  };

  const refreshAll = async (codes) => {
    if (refreshingRef.current) return;
    refreshingRef.current = true;
    setRefreshing(true);
    const uniqueCodes = Array.from(new Set(codes));
    try {
      const updated = [];
      for (const c of uniqueCodes) {
        try {
          const data = await fetchFundData(c);
          updated.push(data);
        } catch (e) {
          console.error(`刷新基金 ${c} 失败`, e);
          const old = funds.find((f) => f.code === c);
          if (old) updated.push(old);
        }
      }
      const deduped = dedupeByCode(updated);
      if (deduped.length) {
        setFunds(deduped);
        localStorage.setItem('funds', JSON.stringify(deduped));
      }
    } catch (e) {
      console.error(e);
    } finally {
      refreshingRef.current = false;
      setRefreshing(false);
    }
  };

  const toggleViewMode = () => {
    const nextMode = viewMode === 'card' ? 'list' : 'card';
    setViewMode(nextMode);
    localStorage.setItem('viewMode', nextMode);
  };

  const addFund = async (e) => {
    e.preventDefault();
    setError('');
    const clean = code.trim();
    if (!clean) {
      setError('请输入产品代码');
      return;
    }
    
    // 检查基金是否已存在
    const existingFund = funds.find((f) => f.code === clean);
    
    // 如果是添加到自建分组，且基金已存在，直接添加到分组
    if (fundType === 'custom' && selectedGroup && existingFund) {
      addToCustomGroup(clean, selectedGroup);
      setCode('');
      return;
    }
    
    // 如果基金已存在且不是添加到自建分组，则报错
    if (existingFund) {
      setError('该产品已存在');
      return;
    }
    
    setLoading(true);
    try {
      const data = await fetchFundData(clean);
      const next = [data, ...funds];
      setFunds(next);
      localStorage.setItem('funds', JSON.stringify(next));
      
      // 根据选择的类型添加到对应分组
      if (fundType === 'holding') {
        setHoldingFunds(prev => {
          const newHolding = new Set(prev);
          newHolding.add(clean);
          localStorage.setItem('holdingFunds', JSON.stringify(Array.from(newHolding)));
          return newHolding;
        });
      } else if (fundType === 'custom' && selectedGroup && customGroups[selectedGroup]) {
        addToCustomGroup(clean, selectedGroup);
      }
      
      setCode('');
    } catch (e) {
      setError(e.message || '操作失败');
    } finally {
      setLoading(false);
    }
  };

  const removeFund = (removeCode) => {
    const next = funds.filter((f) => f.code !== removeCode);
    setFunds(next);
    localStorage.setItem('funds', JSON.stringify(next));

    // 同步删除展开收起状态
    setCollapsedCodes(prev => {
      if (!prev.has(removeCode)) return prev;
      const nextSet = new Set(prev);
      nextSet.delete(removeCode);
      localStorage.setItem('collapsedCodes', JSON.stringify(Array.from(nextSet)));
      return nextSet;
    });

    // 同步删除自选状态
    setFavorites(prev => {
      if (!prev.has(removeCode)) return prev;
      const nextSet = new Set(prev);
      nextSet.delete(removeCode);
      localStorage.setItem('favorites', JSON.stringify(Array.from(nextSet)));
      if (nextSet.size === 0 && currentTab === 'fav') setCurrentTab('all');
      return nextSet;
    });

    // 同步删除持有状态
    setHoldingFunds(prev => {
      if (!prev.has(removeCode)) return prev;
      const nextSet = new Set(prev);
      nextSet.delete(removeCode);
      localStorage.setItem('holdingFunds', JSON.stringify(Array.from(nextSet)));
      return nextSet;
    });

    // 从所有自定义分组中删除
    setCustomGroups(prev => {
      const next = { ...prev };
      let changed = false;
      Object.keys(next).forEach(groupName => {
        if (next[groupName].has(removeCode)) {
          next[groupName].delete(removeCode);
          changed = true;
          if (next[groupName].size === 0) {
            delete next[groupName];
          }
        }
      });
      
      if (changed) {
        const toSave = {};
        Object.keys(next).forEach(key => {
          toSave[key] = Array.from(next[key]);
        });
        localStorage.setItem('customGroups', JSON.stringify(toSave));
      }
      
      return next;
    });
  };

  const manualRefresh = async () => {
    if (refreshingRef.current) return;
    const codes = Array.from(new Set(funds.map((f) => f.code)));
    if (!codes.length) return;
    await refreshAll(codes);
  };

  const saveSettings = (e) => {
    e?.preventDefault?.();
    const ms = Math.max(5, Number(tempSeconds)) * 1000;
    setRefreshMs(ms);
    localStorage.setItem('refreshMs', String(ms));
    setSettingsOpen(false);
  };

  useEffect(() => {
    const onKey = (ev) => {
      if (ev.key === 'Escape' && settingsOpen) setSettingsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [settingsOpen]);

  return (
    <div className="container content">
      <Announcement />
      <div className="navbar glass">
        {refreshing && <div className="loading-bar"></div>}
        <div className="brand">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="var(--accent)" strokeWidth="2" />
            <path d="M5 14c2-4 7-6 14-5" stroke="var(--primary)" strokeWidth="2" />
          </svg>
          <span>基金实时估值</span>
        </div>
        <div className="actions">
          <div className="badge" title="当前刷新频率">
            <span>刷新</span>
            <strong>{Math.round(refreshMs / 1000)}秒</strong>
          </div>
          <button
            className="icon-button"
            aria-label="立即刷新"
            onClick={manualRefresh}
            disabled={refreshing || funds.length === 0}
            aria-busy={refreshing}
            title="立即刷新"
          >
            <RefreshIcon className={refreshing ? 'spin' : ''} width="18" height="18" />
          </button>
          <button
            className="icon-button"
            aria-label="打开设置"
            onClick={() => setSettingsOpen(true)}
            title="设置"
          >
            <SettingsIcon width="18" height="18" />
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="col-12 glass card add-fund-section" role="region" aria-label="添加基金">
          <div className="title" style={{ marginBottom: 12 }}>
            <PlusIcon width="20" height="20" />
            <span>添加基金</span>
            <span className="muted">请输入基金代码（例：004433）</span>
          </div>
          
          <div style={{ marginBottom: 16 }}>
            <div className="muted" style={{ marginBottom: 8, fontSize: '0.8rem' }}>添加类型</div>
            <div className="chips" style={{ marginBottom: 12 }}>
              <button
                type="button"
                className={`chip ${fundType === 'holding' ? 'active' : ''}`}
                onClick={() => setFundType('holding')}
              >
                持有基金
              </button>
              <button
                type="button"
                className={`chip ${fundType === 'custom' ? 'active' : ''}`}
                onClick={() => setFundType('custom')}
              >
                <FolderIcon width="14" height="14" />
                自建分组
              </button>
            </div>
            
            {fundType === 'custom' && (
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <select 
                  className="input" 
                  value={selectedGroup} 
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  style={{ 
                    flex: 1, 
                    minWidth: '120px',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'var(--text)',
                    border: '2px solid var(--border)'
                  }}
                >
                  <option value="" style={{ background: 'var(--card)', color: 'var(--text)' }}>选择分组</option>
                  {Object.keys(customGroups).map(groupName => (
                    <option key={groupName} value={groupName} style={{ background: 'var(--card)', color: 'var(--text)' }}>
                      {groupName}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="button"
                  onClick={() => setShowGroupModal(true)}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  新建分组
                </button>
              </div>
            )}
          </div>

          <form className="form" onSubmit={addFund}>
            <input
              className="input"
              placeholder="基金代码"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              inputMode="numeric"
            />
            <button className="button" type="submit" disabled={loading || (fundType === 'custom' && !selectedGroup)}>
              {loading ? '正在添加…' : '添加'}
            </button>
          </form>
          {error && <div className="muted" style={{ marginTop: 8, color: 'var(--danger)' }}>{error}</div>}
        </div>

        <div className="col-12">
          {funds.length > 0 && (
            <div className="filter-bar" style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <div className="tabs">
                <button
                  className={`tab ${currentTab === 'all' ? 'active' : ''}`}
                  onClick={() => setCurrentTab('all')}
                >
                  全部基金 ({funds.length})
                </button>
                {holdingFunds.size > 0 && (
                  <button
                    className={`tab ${currentTab === 'holding' ? 'active' : ''}`}
                    onClick={() => setCurrentTab('holding')}
                  >
                    持有 ({holdingFunds.size})
                  </button>
                )}
                {Object.keys(customGroups).map(groupName => (
                  <button
                    key={groupName}
                    className={`tab ${currentTab === `group_${groupName}` ? 'active' : ''}`}
                    onClick={() => setCurrentTab(`group_${groupName}`)}
                  >
                    <FolderIcon width="14" height="14" />
                    {groupName} ({customGroups[groupName].size})
                  </button>
                ))}
              </div>

              <div className="sort-group" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="view-toggle" style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '2px' }}>
                  <button
                    className={`icon-button ${viewMode === 'card' ? 'active' : ''}`}
                    onClick={() => { setViewMode('card'); localStorage.setItem('viewMode', 'card'); }}
                    style={{ border: 'none', width: '32px', height: '32px', background: viewMode === 'card' ? 'var(--primary)' : 'transparent', color: viewMode === 'card' ? '#05263b' : 'var(--muted)' }}
                    title="卡片视图"
                  >
                    <GridIcon width="16" height="16" />
                  </button>
                  <button
                      className={`icon-button ${viewMode === 'list' ? 'active' : ''}`}
                      onClick={() => { setViewMode('list'); localStorage.setItem('viewMode', 'list'); }}
                      style={{ border: 'none', width: '32px', height: '32px', background: viewMode === 'list' ? 'var(--primary)' : 'transparent', color: viewMode === 'list' ? '#05263b' : 'var(--muted)' }}
                      title="表格视图"
                    >
                      <ListIcon width="16" height="16" />
                    </button>
                </div>

                <div className="divider" style={{ width: '1px', height: '20px', background: 'var(--border)' }} />

                <div className="sort-items" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="muted" style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <SortIcon width="14" height="14" />
                    排序
                  </span>
                  <div className="chips">
                    {[
                      { id: 'default', label: '智能排序' },
                      { id: 'yield', label: '收益排序' },
                      { id: 'name', label: '名称排序' },
                      { id: 'code', label: '代码排序' }
                    ].map((s) => (
                      <button
                        key={s.id}
                        className={`chip ${sortBy === s.id ? 'active' : ''}`}
                        onClick={() => setSortBy(s.id)}
                        style={{ height: '28px', fontSize: '12px', padding: '0 10px' }}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {funds.length === 0 ? (
            <div className="glass card empty">暂无基金数据</div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={viewMode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={viewMode === 'card' ? 'grid' : 'table-container glass'}
              >
                <div className={viewMode === 'card' ? 'grid col-12' : ''} style={viewMode === 'card' ? { gridColumn: 'span 12', gap: 16 } : {}}>
                  <AnimatePresence mode="popLayout">
                    {funds
                      .filter(f => {
                        if (currentTab === 'all') return true;
                        if (currentTab === 'holding') return holdingFunds.has(f.code);
                        if (currentTab.startsWith('group_')) {
                          const groupName = currentTab.replace('group_', '');
                          return customGroups[groupName]?.has(f.code) || false;
                        }
                        return true;
                      })
                      .sort((a, b) => {
                        if (sortBy === 'yield') {
                          const valA = typeof a.estGszzl === 'number' ? a.estGszzl : (Number(a.gszzl) || 0);
                          const valB = typeof b.estGszzl === 'number' ? b.estGszzl : (Number(b.gszzl) || 0);
                          return valB - valA;
                        }
                        if (sortBy === 'name') return a.name.localeCompare(b.name, 'zh-CN');
                        if (sortBy === 'code') return a.code.localeCompare(b.code);
                        return 0; // default order is the order in the array
                      })
                      .map((f) => (
                      <motion.div
                        layout="position"
                        key={f.code}
                        className={viewMode === 'card' ? 'col-12' : 'table-row-wrapper'}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                      <div className={viewMode === 'card' ? 'glass card' : 'table-row'}>
                        {viewMode === 'list' ? (
                          <>
                            <div className="table-cell name-cell">
                              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <button
                                  className={`icon-button ${holdingFunds.has(f.code) ? 'active' : ''}`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleHolding(f.code);
                                  }}
                                  title={holdingFunds.has(f.code) ? "取消持有" : "标记持有"}
                                  style={{
                                    width: 'auto',
                                    minWidth: '50px',
                                    height: '28px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    padding: '0 8px',
                                    background: holdingFunds.has(f.code) ? 'var(--danger)' : 'rgba(255,255,255,0.05)',
                                    color: holdingFunds.has(f.code) ? 'white' : 'var(--muted)'
                                  }}
                                >
                                  持有
                                </button>
                              </div>
                              <div className="title-text">
                                <span className="name-text">{f.name}</span>
                                <span className="muted code-text">#{f.code}</span>
                              </div>
                            </div>
                            <div className="table-cell text-right value-cell">
                              <span style={{ fontWeight: 700 }}>{f.estPricedCoverage > 0.05 ? f.estGsz.toFixed(4) : (f.gsz ?? '—')}</span>
                            </div>
                            <div className="table-cell text-right change-cell">
                              <span className={f.estPricedCoverage > 0.05 ? (f.estGszzl > 0 ? 'up' : f.estGszzl < 0 ? 'down' : '') : (Number(f.gszzl) > 0 ? 'up' : Number(f.gszzl) < 0 ? 'down' : '')} style={{ fontWeight: 700 }}>
                                {f.estPricedCoverage > 0.05 ? `${f.estGszzl > 0 ? '+' : ''}${f.estGszzl.toFixed(2)}%` : (typeof f.gszzl === 'number' ? `${f.gszzl > 0 ? '+' : ''}${f.gszzl.toFixed(2)}%` : f.gszzl ?? '—')}
                              </span>
                            </div>
                            <div className="table-cell text-right time-cell">
                              <span className="muted" style={{ fontSize: '12px' }}>{f.gztime || f.time || '-'}</span>
                            </div>
                            <div className="table-cell text-center action-cell">
                              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                {favorites.has(f.code) && Object.keys(customGroups).length > 0 && (
                                  <select
                                    className="input"
                                    value=""
                                    onChange={(e) => {
                                      if (e.target.value) {
                                        addToCustomGroup(f.code, e.target.value);
                                        e.target.value = '';
                                      }
                                    }}
                                    style={{
                                      width: 'auto',
                                      minWidth: '80px',
                                      height: '28px',
                                      fontSize: '11px',
                                      padding: '0 6px',
                                      background: 'rgba(255,255,255,0.05)',
                                      color: 'var(--text)',
                                      border: '1px solid var(--border)'
                                    }}
                                  >
                                    <option value="" style={{ background: 'var(--card)', color: 'var(--text)' }}>
                                      +分组
                                    </option>
                                    {Object.keys(customGroups).map(groupName => (
                                      <option key={groupName} value={groupName} style={{ background: 'var(--card)', color: 'var(--text)' }}>
                                        {groupName}
                                      </option>
                                    ))}
                                  </select>
                                )}
                                <button
                                  className="icon-button danger"
                                  onClick={() => removeFund(f.code)}
                                  title="删除"
                                  style={{ width: '28px', height: '28px' }}
                                >
                                  <TrashIcon width="14" height="14" />
                                </button>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                          <div className="row" style={{ marginBottom: 10 }}>
                            <div className="title">
                              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <button
                                  className={`icon-button ${holdingFunds.has(f.code) ? 'active' : ''}`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleHolding(f.code);
                                  }}
                                  title={holdingFunds.has(f.code) ? "取消持有" : "标记持有"}
                                  style={{
                                    width: 'auto',
                                    minWidth: '50px',
                                    height: '32px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    padding: '0 10px',
                                    background: holdingFunds.has(f.code) ? 'var(--danger)' : 'rgba(255,255,255,0.05)',
                                    color: holdingFunds.has(f.code) ? 'white' : 'var(--muted)'
                                  }}
                                >
                                  持有
                                </button>
                              </div>
                              <div className="title-text">
                                <span>{f.name}</span>
                                <span className="muted">#{f.code}</span>
                              </div>
                            </div>

                            <div className="actions">
                              <div className="badge-v">
                                <span>估值时间</span>
                                <strong>{f.gztime || f.time || '-'}</strong>
                              </div>
                              {favorites.has(f.code) && Object.keys(customGroups).length > 0 && (
                                <select
                                  className="input"
                                  value=""
                                  onChange={(e) => {
                                    if (e.target.value) {
                                      addToCustomGroup(f.code, e.target.value);
                                      e.target.value = '';
                                    }
                                  }}
                                  style={{
                                    width: 'auto',
                                    minWidth: '100px',
                                    height: '32px',
                                    fontSize: '12px',
                                    padding: '0 8px',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'var(--text)',
                                    border: '1px solid var(--border)'
                                  }}
                                >
                                  <option value="" style={{ background: 'var(--card)', color: 'var(--text)' }}>
                                    添加到分组
                                  </option>
                                  {Object.keys(customGroups).map(groupName => (
                                    <option key={groupName} value={groupName} style={{ background: 'var(--card)', color: 'var(--text)' }}>
                                      {groupName}
                                    </option>
                                  ))}
                                </select>
                              )}
                              <button
                                className="icon-button danger"
                                onClick={() => removeFund(f.code)}
                                title="删除"
                              >
                                <TrashIcon width="18" height="18" />
                              </button>
                            </div>
                          </div>

                          <div className="row" style={{ marginBottom: 12 }}>
                            <Stat label="单位净值" value={f.dwjz ?? '—'} />
                            <Stat label="估值净值" value={f.estPricedCoverage > 0.05 ? f.estGsz.toFixed(4) : (f.gsz ?? '—')} />
                            <Stat
                              label="涨跌幅"
                              value={f.estPricedCoverage > 0.05 ? `${f.estGszzl > 0 ? '+' : ''}${f.estGszzl.toFixed(2)}%` : (typeof f.gszzl === 'number' ? `${f.gszzl > 0 ? '+' : ''}${f.gszzl.toFixed(2)}%` : f.gszzl ?? '—')}
                              delta={f.estPricedCoverage > 0.05 ? f.estGszzl : (Number(f.gszzl) || 0)}
                            />
                          </div>
                          {f.estPricedCoverage > 0.05 && (
                            <div style={{ fontSize: '10px', color: 'var(--muted)', marginTop: -8, marginBottom: 10, textAlign: 'right' }}>
                              基于 {Math.round(f.estPricedCoverage * 100)}% 持仓估算
                            </div>
                          )}
                          <div
                            style={{ marginBottom: 8, cursor: 'pointer', userSelect: 'none' }}
                            className="title"
                            onClick={() => toggleCollapse(f.code)}
                          >
                            <div className="row" style={{ width: '100%', flex: 1 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <span>前10重仓股票</span>
                                <ChevronIcon
                                  width="16"
                                  height="16"
                                  className="muted"
                                  style={{
                                    transform: collapsedCodes.has(f.code) ? 'rotate(-90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease'
                                  }}
                                />
                              </div>
                              <span className="muted">涨跌幅 / 占比</span>
                            </div>
                          </div>
                          <AnimatePresence>
                            {!collapsedCodes.has(f.code) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                style={{ overflow: 'hidden' }}
                              >
                                {Array.isArray(f.holdings) && f.holdings.length ? (
                                  <div className="list">
                                    {f.holdings.map((h, idx) => (
                                      <div className="item" key={idx}>
                                        <span className="name">{h.name}</span>
                                        <div className="values">
                                          {typeof h.change === 'number' && (
                                            <span className={`badge ${h.change > 0 ? 'up' : h.change < 0 ? 'down' : ''}`} style={{ marginRight: 8 }}>
                                              {h.change > 0 ? '+' : ''}{h.change.toFixed(2)}%
                                            </span>
                                          )}
                                          <span className="weight">{h.weight}</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="muted" style={{ padding: '8px 0' }}>暂无重仓数据</div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>

      <div className="footer">
        <p>数据来源于东方财富</p>
        <p>仅供学习参考使用，不作为任何投资建议</p>
      </div>

      {showGroupModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="新建分组" onClick={() => setShowGroupModal(false)}>
          <div className="glass card modal" onClick={(e) => e.stopPropagation()}>
            <div className="title" style={{ marginBottom: 12 }}>
              <FolderIcon width="20" height="20" />
              <span>新建分组</span>
              <span className="muted">创建自定义基金分组</span>
            </div>

            <div className="form-group" style={{ marginBottom: 16 }}>
              <input
                className="input"
                type="text"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                placeholder="输入分组名称"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    createCustomGroup();
                  }
                }}
              />
            </div>

            <div className="row" style={{ justifyContent: 'flex-end', marginTop: 24, gap: 8 }}>
              <button className="button" onClick={() => setShowGroupModal(false)} style={{ background: 'var(--muted)', color: 'var(--bg)' }}>
                取消
              </button>
              <button className="button" onClick={createCustomGroup} disabled={!newGroupName.trim()}>
                创建分组
              </button>
            </div>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="设置" onClick={() => setSettingsOpen(false)}>
          <div className="glass card modal" onClick={(e) => e.stopPropagation()}>
            <div className="title" style={{ marginBottom: 12 }}>
              <SettingsIcon width="20" height="20" />
              <span>设置</span>
              <span className="muted">配置刷新频率</span>
            </div>

            <div className="form-group" style={{ marginBottom: 16 }}>
              <div className="muted" style={{ marginBottom: 8, fontSize: '0.8rem' }}>刷新频率</div>
              <div className="chips" style={{ marginBottom: 12 }}>
                {[10, 30, 60, 120, 300].map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`chip ${tempSeconds === s ? 'active' : ''}`}
                    onClick={() => setTempSeconds(s)}
                    aria-pressed={tempSeconds === s}
                  >
                    {s} 秒
                  </button>
                ))}
              </div>
              <input
                className="input"
                type="number"
                min="5"
                step="5"
                value={tempSeconds}
                onChange={(e) => setTempSeconds(Number(e.target.value))}
                placeholder="自定义秒数"
              />
            </div>

            <div className="row" style={{ justifyContent: 'flex-end', marginTop: 24 }}>
              <button className="button" onClick={saveSettings}>保存并关闭</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
