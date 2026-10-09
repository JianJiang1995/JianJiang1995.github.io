(() => {
  const translations = {
    '.nav-name': ['姜键'],
    'nav ul a': ['关于', '动态', '论文', '经历', '荣誉'],
    '.profile-left h1': ['姜键 <span class="cn-name">(Jian Jiang)</span>'],
    '.profile-left .title': ['博士后研究员'],
    '.profile-left .affiliation': ['上海交通大学'],
    '.profile-right p': [
      '我目前是上海交通大学博士后研究员，与<a href="https://scholar.google.com/citations?user=4EXokwkAAAAJ">班宇通教授</a>合作开展研究。2024年，我获得伦敦国王学院（KCL）博士学位，导师为<a href="https://nms.kcl.ac.uk/oya.celiktutan/">Oya Celiktutan 教授</a>。',
      '大语言模型与视觉模型、手术人工智能、参数高效迁移学习、模型压缩、增量与持续学习、多模态学习、计算机视觉、情感计算、模型公平性、医学图像分析。'
    ],
    '.profile-right h3': ['研究方向', '教育背景'],
    '.edu-list li': [
      '<strong>博士</strong>，深度学习 / 计算机视觉，伦敦国王学院，2019–2024',
      '<strong>硕士</strong>，人工智能（<em>Distinction，优等成绩</em>），伦敦国王学院，2018–2019',
      '<strong>学士</strong>，软件工程，武汉科技大学，2014–2018'
    ],
    '#news h2': ['最新动态'],
    '.news-date': ['2026年9月', '2026年3月', '2026年3月', '2026年3月', '2025年12月', '2024年', '2024年'],
    '.news-text': [
      '<a href="https://openreview.net/forum?id=aFYphrxbNI">LITHE</a> 已被 <strong>NeurIPS 2026（Poster）</strong>录用。基于格索引的编码实现紧凑的扩散模型个性化适配器，在单张 A100 80 GB GPU 上支持逾10,000个适配器共存。',
      '<a href="https://arxiv.org/abs/2603.16822">Surg&Sigma;</a> 发布：面向手术智能的大规模多模态数据与基础模型体系，覆盖6个临床专科、18项手术任务及逾598万条对话。',
      '<a href="https://arxiv.org/abs/2603.12430">Surg-R1</a> 发布：具有层级推理能力的手术视觉语言模型，Arena Score 达57.7%，在手术基准上超过 GPT-5.1（28.5%）与 Gemini 3.0 Pro（29.8%）。',
      '<a href="https://arxiv.org/abs/2603.18544">SCISSR</a> 发布：支持涂鸦提示的交互式手术场景分割框架，在 EndoVis 2018 和 CholecSeg8k 上分别取得95.41%和96.30%的 Dice。',
      '<a href="https://arxiv.org/abs/2501.00525">手术视频分析中 Segment Anything 模型的系统评估与使用指南</a> 被 <em>NPJ Digital Surgery</em> 录用。',
      '加入上海交通大学，任博士后研究员。',
      '关于增量偏见消除的论文被 <em>IEEE Transactions on Affective Computing</em> 录用（IF：9.6）。'
    ],
    '#publications h2': ['代表性论文'],
    '.pub-note': ['* 表示共同第一作者 / 同等贡献。'],
    '.pub-title': [
      'Surg&Sigma;：面向手术智能的大规模多模态数据与基础模型体系',
      'Surg-R1：面向可扩展、可解释手术决策支持的层级推理基础模型及多中心临床验证',
      'LITHE：面向扩散模型个性化的格索引双 Hadamard 编码',
      'SCISSR：基于涂鸦条件的交互式手术分割与精细化',
      '手术视频分析中 Segment Anything 模型的系统评估与使用指南',
      '人格计算中的泛化与增量偏见消除',
      '面向可扩展任务增量学习的神经权重搜索',
      '人格计算中的泛化偏见消除',
      '面向自动自评人格识别的个性化模型学习',
      'IB-DRR：通过信息回传离散表示重放实现增量学习',
      '基于密集轨迹与动态图像的行为预测'
    ],
    '.pub-venue': [
      'arXiv 预印本 arXiv:2603.16822，2026',
      'arXiv 预印本 arXiv:2603.12430，2026',
      '神经信息处理系统大会（NeurIPS），2026 <span class="pub-badge">Poster · 已录用</span>',
      'arXiv 预印本 arXiv:2603.18544，2026',
      'NPJ Digital Surgery，2025',
      'IEEE Transactions on Affective Computing，2024',
      'IEEE/CVF 计算机视觉应用冬季会议（WACV），2023',
      '首届多模态与负责任情感计算研讨会（MRAC），2023',
      'Proceedings of Machine Learning Research（PMLR），2022',
      'CVPR 持续学习研讨会，2021',
      '中国自动化大会（CAC），2017'
    ],
    '#experience h2': ['工作经历'],
    '.exp-period': ['2024–至今', '2024', '2023–2024', '2019–2022'],
    '.exp-role': ['博士后研究员', 'AIGC 研究员', '研究助理', '助教'],
    '.exp-org': ['上海交通大学', '<a href="https://www.liblibai.com">LiblibAI</a> 与 <a href="https://lovart.ai">Lovart</a>', '伦敦国王学院与同济大学', '伦敦国王学院'],
    '.exp-desc': [
      '合作导师：<a href="https://scholar.google.com/citations?user=4EXokwkAAAAJ">班宇通教授</a>（国家级青年人才）',
      '导师：<a href="https://www.linkedin.com/in/zhibo-chen-10510816/">陈志博</a>（LiblibAI 首席 AI 科学家；Lovart 首席技术官）',
      '合作导师：<a href="https://scholar.google.com/citations?user=aj2XHWoAAAAJ">史淼晶教授</a>（同济大学，国家级青年人才）',
      '授课课程：计算机视觉、模式识别、仿生方法、随机变量与随机过程'
    ],
    '#awards h2': ['奖项与荣誉'],
    '.award-category h3': ['科研资助', '竞赛奖项', '学术荣誉', '专业资格'],
    '.award-category li': [
      '上海市“超级博士后”激励计划', '上海市博士后引进计划', '上海市白玉兰人才计划浦江项目', 'NVIDIA 学术硬件资助，2022',
      '<strong>国际冠军</strong>，自主避障，国际仿人机器人奥林匹克大赛，2017',
      '<strong>国际亚军 × 2</strong>，仿真机器人足球（大型组与中型组），FIRA 机器人世界杯，2017',
      '<strong>一等奖</strong>，仿人机器人障碍跑，国际仿人机器人奥林匹克大赛，2017',
      '武汉科技大学优秀毕业论文，2018', '武汉科技大学一等奖学金与优秀学生，2015–2018',
      '<strong>系统分析师</strong>（高级），人力资源和社会保障部、工业和信息化部认证'
    ],
    'footer p': ['&copy; 2026 姜键。最后更新：2026年10月。']
  };
  const entries = Object.entries(translations).flatMap(([selector, values]) => {
    const nodes = [...document.querySelectorAll(selector)];
    if (nodes.length !== values.length) throw new Error(`Translation count mismatch: ${selector}`);
    return nodes.map((node, index) => ({ node, en: node.innerHTML, zh: values[index] }));
  });
  const links = [...document.querySelectorAll('.pub-links a')].map(node => ({ node, en: node.innerHTML }));
  const button = document.getElementById('language-toggle');
  let language = 'en';
  function applyLanguage(next) {
    language = next;
    const chinese = next === 'zh';
    document.documentElement.lang = chinese ? 'zh-CN' : 'en';
    document.title = chinese ? '姜键 - 个人学术主页' : 'Jian Jiang - Academic Homepage';
    entries.forEach(entry => { entry.node.innerHTML = entry[next]; });
    links.forEach(({ node, en }) => {
      node.innerHTML = chinese ? en.replace('Project Page', '项目主页').replace('Paper', '论文') : en;
    });
    document.getElementById('language-label').textContent = chinese ? 'EN' : '中文';
    button.title = chinese ? 'Switch to English' : 'Switch to Chinese';
    button.setAttribute('aria-label', button.title);
    document.querySelector('a[href^="mailto:"]').title = chinese ? '邮箱' : 'Email';
    try { localStorage.setItem('homepage-language', next); } catch (_) { /* Storage may be disabled. */ }
  }
  button.addEventListener('click', () => applyLanguage(language === 'en' ? 'zh' : 'en'));
  let saved;
  try { saved = localStorage.getItem('homepage-language'); } catch (_) { /* Use English by default. */ }
  const requested = new URLSearchParams(window.location.search).get('lang');
  applyLanguage((requested || saved) === 'zh' ? 'zh' : 'en');
})();
