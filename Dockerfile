FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Philipsmith6175/Philsmagic /root/Philsmagic
WORKDIR /root/Philsmagic/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
