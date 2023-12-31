// src/mock/index.bundled_o0ff6norwf.bundled_at4rhcj7f6k.mjs
function creatUserList() {
  return [
    {
      userId: 1,
      avatar: "https://img2.baidu.com/it/u=1579991524,66947472&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1694624400&t=caf7457a05e4b7614333f5e31fc0c6eb",
      username: "admin",
      password: "123456",
      desc: "\u5E73\u53F0\u7BA1\u7406\u5458",
      token: "admin token",
      routes: ["home"]
    },
    {
      userId: 2,
      avatar: "https://img2.baidu.com/it/u=170237391,555920326&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1694624400&t=ed610056c4157da31b84ea610797d943",
      username: "system",
      password: "000000",
      desc: "\u7CFB\u7EDF\u7BA1\u7406\u5458",
      token: "system token",
      routes: ["home"]
    }
  ];
}
var mock_default = [
  {
    url: "/api/info",
    method: "get",
    response(opt) {
      const { username } = opt.body;
      const checkUser = creatUserList().find((item) => {
        return item.username == username;
      });
      console.log(opt + "11111");
      return { code: 200, data: opt.body };
    }
  },
  {
    url: "/api/login",
    method: "post",
    setTimeout: 200,
    response(opt) {
      const { username, password } = opt.body;
      const checkUser = creatUserList().find((item) => {
        return item.username == username && item.password == password;
      });
      if (!checkUser) {
        return { code: 201, data: { message: "\u8D26\u53F7\u6216\u8005\u5BC6\u7801\u4E0D\u6B63\u786E" } };
      }
      return { code: 200, data: checkUser };
    }
  }
];
export {
  mock_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vY2svc3JjL21vY2svc3JjL21vY2svaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2xpeXVoYW4vRGVza3RvcC9INS92dWUtc2hvcC9zcmMvbW9jay9pbmRleC50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMvbGl5dWhhbi9EZXNrdG9wL0g1L3Z1ZS1zaG9wL3NyYy9tb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9Vc2Vycy9saXl1aGFuL0Rlc2t0b3AvSDUvdnVlLXNob3Avc3JjL21vY2svaW5kZXgudHNcIjtpbXBvcnQgeyB0eXBlIE1vY2tNZXRob2QgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJ1xuXG5mdW5jdGlvbiBjcmVhdFVzZXJMaXN0KCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHVzZXJJZDogMSxcbiAgICAgIGF2YXRhcjogJ2h0dHBzOi8vaW1nMi5iYWlkdS5jb20vaXQvdT0xNTc5OTkxNTI0LDY2OTQ3NDcyJmZtPTI1MyZhcHA9MTM4JnNpemU9dzkzMSZuPTAmZj1KUEVHJmZtdD1hdXRvP3NlYz0xNjk0NjI0NDAwJnQ9Y2FmNzQ1N2EwNWU0Yjc2MTQzMzNmNWUzMWZjMGM2ZWInLFxuICAgICAgdXNlcm5hbWU6ICdhZG1pbicsXG4gICAgICBwYXNzd29yZDogJzEyMzQ1NicsXG4gICAgICBkZXNjOiAnXHU1RTczXHU1M0YwXHU3QkExXHU3NDA2XHU1NDU4JyxcbiAgICAgIHRva2VuOiAnYWRtaW4gdG9rZW4nLFxuICAgICAgcm91dGVzOiBbJ2hvbWUnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHVzZXJJZDogMixcbiAgICAgIGF2YXRhcjogJ2h0dHBzOi8vaW1nMi5iYWlkdS5jb20vaXQvdT0xNzAyMzczOTEsNTU1OTIwMzI2JmZtPTI1MyZhcHA9MTM4JnNpemU9dzkzMSZuPTAmZj1KUEVHJmZtdD1hdXRvP3NlYz0xNjk0NjI0NDAwJnQ9ZWQ2MTAwNTZjNDE1N2RhMzFiODRlYTYxMDc5N2Q5NDMnLFxuICAgICAgdXNlcm5hbWU6ICdzeXN0ZW0nLFxuICAgICAgcGFzc3dvcmQ6ICcwMDAwMDAnLFxuICAgICAgZGVzYzogJ1x1N0NGQlx1N0VERlx1N0JBMVx1NzQwNlx1NTQ1OCcsXG4gICAgICB0b2tlbjogJ3N5c3RlbSB0b2tlbicsXG4gICAgICByb3V0ZXM6IFsnaG9tZSddLFxuICAgIH0sXG4gIF1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHVybDogJy9hcGkvaW5mbycsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZShvcHQpIHtcbiAgICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IG9wdC5ib2R5O1xuICAgICAgY29uc3QgY2hlY2tVc2VyID0gY3JlYXRVc2VyTGlzdCgpLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udXNlcm5hbWUgPT0gdXNlcm5hbWVcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhvcHQgKyBcIjExMTExXCIpO1xuICAgICAgLy8gaWYgKCFjaGVja1VzZXIpIHtcbiAgICAgIC8vICAgcmV0dXJuIHsgY29kZTogMjAxLCBkYXRhOiB7IG1lc3NhZ2U6ICdcdTc1MjhcdTYyMzdcdTRGRTFcdTYwNkZcdThCRjdcdTZDNDJcdTU5MzFcdThEMjUnIH0gfVxuICAgICAgLy8gfVxuICAgICAgcmV0dXJuIHsgY29kZTogMjAwLCBkYXRhOiBvcHQuYm9keSB9XG4gICAgfSxcblxuICB9LFxuXG4gIHtcbiAgICB1cmw6ICcvYXBpL2xvZ2luJyxcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBzZXRUaW1lb3V0OiAyMDAsXG4gICAgcmVzcG9uc2Uob3B0KSB7XG4gICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gb3B0LmJvZHk7XG4gICAgICBjb25zdCBjaGVja1VzZXIgPSBjcmVhdFVzZXJMaXN0KCkuZmluZCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS51c2VybmFtZSA9PSB1c2VybmFtZSAmJiBpdGVtLnBhc3N3b3JkID09IHBhc3N3b3JkXG4gICAgICB9KVxuICAgICAgaWYgKCFjaGVja1VzZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgY29kZTogMjAxLCBkYXRhOiB7IG1lc3NhZ2U6ICdcdThEMjZcdTUzRjdcdTYyMTZcdTgwMDVcdTVCQzZcdTc4MDFcdTRFMERcdTZCNjNcdTc4NkUnIH0gfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgY29kZTogMjAwLCBkYXRhOiBjaGVja1VzZXIgfVxuICAgIH0sXG4gIH1cbl0gYXMgTW9ja01ldGhvZFtdXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsU0FBUyxnQkFBZ0I7QUFDdkIsU0FBTztJQUNMO01BQ0UsUUFBUTtNQUNSLFFBQVE7TUFDUixVQUFVO01BQ1YsVUFBVTtNQUNWLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUSxDQUFDLE1BQU07SUFDakI7SUFDQTtNQUNFLFFBQVE7TUFDUixRQUFRO01BQ1IsVUFBVTtNQUNWLFVBQVU7TUFDVixNQUFNO01BQ04sT0FBTztNQUNQLFFBQVEsQ0FBQyxNQUFNO0lBQ2pCO0VBQ0Y7QUFDRjtBQUlBLElBQU8sZUFBUTtFQUNiO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixTQUFTLEtBQUs7QUFDWixZQUFNLEVBQUUsU0FBUyxJQUFJLElBQUk7QUFDekIsWUFBTSxZQUFZLGNBQWMsRUFBRSxLQUFLLENBQUMsU0FBUztBQUMvQyxlQUFPLEtBQUssWUFBWTtNQUMxQixDQUFDO0FBQ0QsY0FBUSxJQUFJLE1BQU0sT0FBTztBQUl6QixhQUFPLEVBQUUsTUFBTSxLQUFLLE1BQU0sSUFBSSxLQUFLO0lBQ3JDO0VBRUY7RUFFQTtJQUNFLEtBQUs7SUFDTCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFNBQVMsS0FBSztBQUNaLFlBQU0sRUFBRSxVQUFVLFNBQVMsSUFBSSxJQUFJO0FBQ25DLFlBQU0sWUFBWSxjQUFjLEVBQUUsS0FBSyxDQUFDLFNBQVM7QUFDL0MsZUFBTyxLQUFLLFlBQVksWUFBWSxLQUFLLFlBQVk7TUFDdkQsQ0FBQztBQUNELFVBQUksQ0FBQyxXQUFXO0FBQ2QsZUFBTyxFQUFFLE1BQU0sS0FBSyxNQUFNLEVBQUUsU0FBUyx5REFBWSxFQUFFO01BQ3JEO0FBQ0EsYUFBTyxFQUFFLE1BQU0sS0FBSyxNQUFNLFVBQVU7SUFDdEM7RUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
