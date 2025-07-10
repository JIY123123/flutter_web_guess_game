import 'package:flutter/material.dart';
import 'game_screen.dart';

class WinScreen extends StatelessWidget {
  final int guessCount;

  const WinScreen({super.key, required this.guessCount});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.lightGreen[50],
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset('assets/images/win.jpeg', width: 300),
            const SizedBox(height: 40),
            Text(
              '恭喜你猜對了！\n總共猜了 $guessCount 次',
              style: const TextStyle(fontSize: 24),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (_) => const GameScreen()),
                );
              },
              child: const Text('再玩一次'),
            ),
          ],
        ),
      ),
    );
  }
}
