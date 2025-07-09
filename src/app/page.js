export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🖥️ 基礎情報技術者試験って何？
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            コンピューターのプロになるための最初の資格！<br/>
            中学生のあなたにもわかりやすく説明します 😊
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          
          <section className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
              🤔 この試験って何なの？
            </h2>
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                <strong>基礎情報技術者試験</strong>は、コンピューターやプログラミングの基本的な知識を測る国家試験です。
              </p>
              <p>
                例えば、スマホアプリを作る人や、コンピューターシステムを管理する人が
                「私はコンピューターの基本をちゃんと理解しています！」と証明するための資格なんです。
              </p>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  💡 身近な例で言うと...
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• YouTubeやInstagramなどのアプリを作る人</li>
                  <li>• ゲームを開発する人</li>
                  <li>• コンピューターの不具合を直す人</li>
                  <li>• インターネットを安全に使えるようにする人</li>
                </ul>
                <p className="mt-4 text-sm text-blue-700">
                  こんな仕事をしたい人が取る資格です！
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
              📝 試験の基本情報
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  🕐 試験の時間と形式
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>午前の試験</strong>：2時間30分</li>
                  <li>• <strong>午後の試験</strong>：2時間30分</li>
                  <li>• <strong>問題形式</strong>：選択肢から答えを選ぶ</li>
                  <li>• <strong>受験料</strong>：5,700円</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">
                  📅 いつ受けられるの？
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>CBT方式</strong>：コンピューターで受験</li>
                  <li>• <strong>いつでも受験可能</strong>：予約制</li>
                  <li>• <strong>結果発表</strong>：試験終了後すぐ</li>
                  <li>• <strong>合格率</strong>：約25%（4人に1人）</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
              📚 何を勉強するの？
            </h2>
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">
                  🌅 午前試験（基礎知識）
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-purple-700">コンピューターの仕組み</h4>
                    <p className="text-sm text-gray-600">パソコンやスマホがどうやって動いているか</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-purple-700">情報処理技術</h4>
                    <p className="text-sm text-gray-600">データを処理する方法や技術</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-purple-700">セキュリティ</h4>
                    <p className="text-sm text-gray-600">コンピューターを安全に使う方法</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-purple-700">企業活動</h4>
                    <p className="text-sm text-gray-600">会社でコンピューターをどう使うか</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">
                  🌇 午後試験（応用問題）
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-orange-700">プログラミング</h4>
                    <p className="text-sm text-gray-600">アプリやゲームを作る技術</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-orange-700">データベース</h4>
                    <p className="text-sm text-gray-600">大量のデータを管理する方法</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-orange-700">ネットワーク</h4>
                    <p className="text-sm text-gray-600">インターネットの仕組み</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-orange-700">アルゴリズム</h4>
                    <p className="text-sm text-gray-600">問題を解く手順の考え方</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
              🎯 勉強方法（中学生向け）
            </h2>
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-400">
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  📖 ステップ1：基礎を理解しよう（3-4ヶ月）
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 中学生向けの参考書から始める</li>
                  <li>• 難しい言葉は辞書で調べる習慣をつける</li>
                  <li>• 身近な例（スマホ、ゲーム）で理解する</li>
                  <li>• 分からない部分は先生や大人に聞く</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  💪 ステップ2：問題を解いてみよう（1-2ヶ月）
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 過去問題を解いてみる</li>
                  <li>• 間違えた問題は必ず復習する</li>
                  <li>• 同じ問題を何度も解く</li>
                  <li>• 時間を測って解く練習をする</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-400">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  🚀 ステップ3：実際に試験を受けよう（1ヶ月）
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 模擬試験で練習する</li>
                  <li>• 苦手な分野を集中的に勉強する</li>
                  <li>• 体調管理をしっかりする</li>
                  <li>• 自信を持って試験に臨む</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
              🌟 合格したらどうなるの？
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-indigo-50 rounded-2xl">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                  進学に有利
                </h3>
                <p className="text-sm text-gray-600">
                  情報系の高校や大学への進学で評価される
                </p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  就職に有利
                </h3>
                <p className="text-sm text-gray-600">
                  IT企業への就職で技術力をアピールできる
                </p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-2xl">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  自信がつく
                </h3>
                <p className="text-sm text-gray-600">
                  コンピューターの基礎知識があることの証明
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl shadow-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              🎉 君もIT業界のプロを目指そう！
            </h2>
            <p className="text-lg mb-6">
              基礎情報技術者試験は、コンピューターの世界への第一歩です。<br/>
              中学生のうちから挑戦することで、将来の可能性が広がります！
            </p>
            <div className="bg-white text-purple-600 rounded-2xl p-4 inline-block">
              <p className="font-semibold">
                📚 まずは基礎から始めて、一歩ずつ頑張ろう！
              </p>
            </div>
          </section>
        </div>
        
        <div className="fixed bottom-6 right-6">
          <a 
            href="/page1" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            次に
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
