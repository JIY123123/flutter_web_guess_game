import 'package:flutter/material.dart';
import 'dart:math';
import 'win_screen.dart';

class GameScreen extends StatefulWidget {
  const GameScreen({super.key});

  @override
  State<GameScreen> createState() => _GameScreenState();
}

class _GameScreenState extends State<GameScreen> {
  final TextEditingController _controller = TextEditingController();
  late int _target;
  final List<Map<String, String>> _history = [];
  bool _showFunnyImage = false;

  @override
  void initState() {
    super.initState();
    _target = Random().nextInt(100) + 1;
  }

  void _checkGuess() {
    final guess = int.tryParse(_controller.text);
    if (guess == null) {
      setState(() {
        _history.add({'guess': '？', 'result': '請輸入有效數字'});
      });
      return;
    }

    String result;
    if (guess > _target) {
      result = '太大了';
    } else if (guess < _target) {
      result = '太小了';
    } else {
     Navigator.pushReplacement(
  context,
  MaterialPageRoute(builder: (_) => WinScreen(guessCount: _history.length)),
);

      return;
    }

    setState(() {
      _history.add({'guess': guess.toString(), 'result': result});
      _showFunnyImage = true;
    });

    // 1 秒後隱藏圖片
    Future.delayed(const Duration(seconds: 1), () {
      if (mounted) {
        setState(() {
          _showFunnyImage = false;
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('猜數字遊戲')),
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          children: [
            const Text('猜 1 到 100 的數字'),
            TextField(
              controller: _controller,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(hintText: '輸入你的猜測'),
            ),
            const SizedBox(height: 10),
            ElevatedButton(
              onPressed: _checkGuess,
              child: const Text('提交'),
            ),
            const SizedBox(height: 20),
            if (_showFunnyImage)
              Image.asset('assets/images/funny.jpeg', width: 150),
            const SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: _history.length,
                itemBuilder: (context, index) {
                  final item = _history[index];
                  return Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text('猜測：${item['guess']}'),
                      Text(item['result']!),
                    ],
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
