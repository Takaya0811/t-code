export default function Page1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            📅 基礎情報技術者試験 スケジュール管理
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            勉強スタートから合格までの<br/>
            あなた専用のスケジュール管理メモページ 📝
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-8">
          
          <section className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
              🎯 目標設定・基本情報
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  📋 基本情報
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">目標受験日：</span>
                    <div className="bg-white p-2 rounded border-2 border-dashed border-blue-300 min-w-[150px]">
                      <span className="text-gray-400">2024年 ○月 ○日</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">勉強開始日：</span>
                    <div className="bg-white p-2 rounded border-2 border-dashed border-blue-300 min-w-[150px]">
                      <span className="text-gray-400">2024年 ○月 ○日</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">準備期間：</span>
                    <div className="bg-white p-2 rounded border-2 border-dashed border-blue-300 min-w-[100px]">
                      <span className="text-gray-400">○ヶ月</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  💪 目標スコア
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">午前試験：</span>
                    <div className="bg-white p-2 rounded border-2 border-dashed border-green-300 min-w-[100px]">
                      <span className="text-gray-400">○○点以上</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">午後試験：</span>
                    <div className="bg-white p-2 rounded border-2 border-dashed border-green-300 min-w-[100px]">
                      <span className="text-gray-400">○○点以上</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">合格目標：</span>
                    <div className="bg-white p-2 rounded border-2 border-dashed border-green-300 min-w-[100px]">
                      <span className="text-gray-400">60点以上</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
              📚 6ヶ月学習スケジュール
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-400">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">
                    📖 1～2ヶ月目（基礎固め）
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">参考書1冊目完了</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">コンピューターシステム理解</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">情報処理技術基礎</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">セキュリティ基礎</span>
                    </label>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-400">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    💻 3～4ヶ月目（応用学習）
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">アルゴリズム学習</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">プログラミング基礎</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">データベース学習</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">ネットワーク学習</span>
                    </label>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-400">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    🎯 5～6ヶ月目（試験対策）
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">過去問5年分完了</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">模擬試験3回以上</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">弱点分野の克服</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">試験申込み完了</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">
              📊 週間学習記録
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="p-3 text-left">曜日</th>
                    <th className="p-3 text-left">学習時間</th>
                    <th className="p-3 text-left">学習内容</th>
                    <th className="p-3 text-left">理解度</th>
                    <th className="p-3 text-left">メモ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">月曜日</td>
                    <td className="p-3">
                      <div className="bg-gray-100 p-2 rounded border-2 border-dashed border-gray-300 min-w-[80px]">
                        <span className="text-gray-400">○時間</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="bg-gray-100 p-2 rounded border-2 border-dashed border-gray-300 min-w-[120px]">
                        <span className="text-gray-400">学習内容</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <select className="p-2 border rounded">
                        <option>😊 よく理解</option>
                        <option>🙂 まあまあ</option>
                        <option>😐 普通</option>
                        <option>😟 少し難しい</option>
                        <option>😵 難しい</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <div className="bg-gray-100 p-2 rounded border-2 border-dashed border-gray-300 min-w-[150px]">
                        <span className="text-gray-400">気づき・メモ</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">火曜日</td>
                    <td className="p-3">
                      <div className="bg-gray-100 p-2 rounded border-2 border-dashed border-gray-300 min-w-[80px]">
                        <span className="text-gray-400">○時間</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="bg-gray-100 p-2 rounded border-2 border-dashed border-gray-300 min-w-[120px]">
                        <span className="text-gray-400">学習内容</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <select className="p-2 border rounded">
                        <option>😊 よく理解</option>
                        <option>🙂 まあまあ</option>
                        <option>😐 普通</option>
                        <option>😟 少し難しい</option>
                        <option>😵 難しい</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <div className="bg-gray-100 p-2 rounded border-2 border-dashed border-gray-300 min-w-[150px]">
                        <span className="text-gray-400">気づき・メモ</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">水曜日</td>
                    <td className="p-3">
                      <div className="bg-gray-100 p-2 rounded border-2 border-dashed border-gray-300 min-w-[80px]">
                        <span className="text-gray-400">○時間</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="bg-gray-100 p-2 rounded border-2 border-dashed border-gray-300 min-w-[120px]">
                        <span className="text-gray-400">学習内容</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <select className="p-2 border rounded">
                        <option>😊 よく理解</option>
                        <option>🙂 まあまあ</option>
                        <option>😐 普通</option>
                        <option>😟 少し難しい</option>
                        <option>😵 難しい</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <div className="bg-gray-100 p-2 rounded border-2 border-dashed border-gray-300 min-w-[150px]">
                        <span className="text-gray-400">気づき・メモ</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
              📝 自由メモ・気づき
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-pink-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-pink-800 mb-4">
                  💡 今日の気づき
                </h3>
                <div className="bg-white p-4 rounded-lg border-2 border-dashed border-pink-300 min-h-[150px]">
                  <p className="text-gray-400 text-sm">
                    今日学んだことで印象に残ったことや<br/>
                    難しかった問題について書いてみよう
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">
                  🔥 モチベーション
                </h3>
                <div className="bg-white p-4 rounded-lg border-2 border-dashed border-yellow-300 min-h-[150px]">
                  <p className="text-gray-400 text-sm">
                    合格したらやりたいことや<br/>
                    頑張る理由を書いてやる気をアップ！
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-3xl shadow-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              🎉 合格まであと一歩！
            </h2>
            <div className="bg-white text-gray-800 rounded-2xl p-6 mx-auto max-w-2xl">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">進捗状況</span>
                <span className="text-2xl">📈</span>
              </div>
              <div className="bg-gray-200 rounded-full h-6 mb-4">
                <div className="bg-gradient-to-r from-green-400 to-blue-400 h-6 rounded-full" style={{width: '0%'}}></div>
              </div>
              <p className="text-sm text-gray-600">
                学習を進めるごとに進捗バーが伸びていくよ！<br/>
                コツコツ続けて合格を掴もう 💪
              </p>
            </div>
          </section>

        </div>
        
        <div className="fixed bottom-6 right-6">
          <a 
            href="/" 
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <span className="text-xl">←</span>
            戻る
          </a>
        </div>
      </div>
    </div>
  );
}