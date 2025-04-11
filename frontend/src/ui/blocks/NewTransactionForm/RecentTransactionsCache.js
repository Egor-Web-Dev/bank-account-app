class RecentTransationsCache {
  static setTransactions(accountNumber, amount) {
    const transactions = this.getTransactions().filter(
      (t) => t.accountNumber !== accountNumber,
    );

    transactions.push({ accountNumber, amount });

    localStorage.setItem("transactions", JSON.stringify(transactions));
  }

  static getTransactions() {
    return JSON.parse(localStorage.getItem("transactions")) || [];
  }
}

export default RecentTransationsCache;
